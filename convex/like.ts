import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { threadId } from "worker_threads";

export const getLike = query({
  args: { id: v.id("threads") },
  handler: async (ctx, args) => {
    const liked = await ctx.db
      .query("likes")
      .withIndex("by_thread", (q) => q.eq("threadId", args.id))
      .collect();
    return liked;
  },
});

export const createlike = mutation({
  args: {
    id: v.id("threads"),
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
        q.eq("userId", args.userId).eq("threadId", args.id)
      )
      .unique();

    if (existingLike) {
      await ctx.db.delete(existingLike._id);
    }

    await ctx.db.insert("likes", {
      userId: args.userId,
      threadId: args.id,
    });
  },
});

export const removeLike = mutation({
  args: { id: v.id("threads"), userId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    const thread = await ctx.db.get(args.id);

    if (!thread) {
      throw new Error("Thread not found");
    }

    const existingLike = await ctx.db
      .query("likes")
      .withIndex("by_user_by_thread", (q) =>
        q.eq("userId", args.userId).eq("threadId", args.id)
      )
      .unique();

    if (existingLike) {
      await ctx.db.delete(existingLike._id);
    }

    return thread;
  },
});
