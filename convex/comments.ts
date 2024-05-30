import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { threadId } from "worker_threads";

// export const create = mutation({ args: {}, handler: async (ctx, args) => {} });

export const createComments = mutation({
  args: {
    id: v.id("threads"),
    userId: v.string(),
    comments: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    const thread = await ctx.db.get(args.id);

    if (!thread) {
      throw new Error("Thread not found");
    }

    await ctx.db.insert("comments", {
      threadId: args.id,
      userId: args.userId,
      comments: args.comments,
    });

    const comment = await ctx.db.get(args.id);

    if (!comment) {
      throw new Error("Thread not found");
    }

    await ctx.db.insert("notifications", {
      type: "comment",
      userId: thread.userId,
      actorId: args.userId,
      entityId: args.id,
      entityType: "comment",
      isRead: false,
    });
  },
});

export const getCommentsByThread = query({
  args: {
    threadId: v.id("threads"),
  },
  handler: async (ctx, args) => {
    const threads = await ctx.db.get(args.threadId);
    if (!threads) return null;

    const comments = ctx.db
      .query("comments")
      .withIndex("by_thread", (t) => t.eq("threadId", args.threadId))
      .order("desc")
      .collect();
    return comments;
  },
});

export const getCommentsByUser = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const comments = ctx.db
      .query("comments")
      .withIndex("by_user", (t) => t.eq("userId", args.userId))
      .order("desc")
      .collect();
    return comments;
  },
});
