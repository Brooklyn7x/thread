import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getLike = query({
  args: { threadId: v.id("threads") },
  handler: async (ctx, args) => {
    const liked = await ctx.db
      .query("likes")
      .withIndex("by_thread", (q) => q.eq("threadId", args.threadId))
      .collect();
    return liked;
  },
});

export const toogleLike = mutation({
  args: {
    threadId: v.id("threads"),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const existingLike = await ctx.db
      .query("likes")
      .withIndex("by_user_by_thread", (q) =>
        q.eq("userId", args.userId).eq("threadId", args.threadId)
      )
      .unique();

    if (existingLike) {
      await ctx.db.delete(existingLike._id);
    } else {
      await ctx.db.insert("likes", {
        userId: args.userId,
        threadId: args.threadId,
      });

      const thread = await ctx.db.get(args.threadId);

      if (!thread) {
        throw new Error("Thread not found");
      }

      await ctx.db.insert("notifications", {
        type: "like",
        userId: thread.userId,
        actorId: args.userId,
        entityId: args.threadId,
        entityType: "like",
        isRead: false,
      });
    }
  },
});

export const removeLike = mutation({
  args: { threadId: v.id("threads"), userId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    const thread = await ctx.db.get(args.threadId);

    if (!thread) {
      throw new Error("Thread not found");
    }

    const existingLike = await ctx.db
      .query("likes")
      .withIndex("by_user_by_thread", (q) =>
        q.eq("userId", args.userId).eq("threadId", args.threadId)
      )
      .unique();

    if (existingLike) {
      await ctx.db.delete(existingLike._id);
    }

    return thread;
  },
});
