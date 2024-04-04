import { threadId } from "worker_threads";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAllOrThrow } from "convex-helpers/server/relationships";

export const savedThreads = mutation({
  args: {
    id: v.id("threads"),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    const thread = await ctx.db.get(args.id);

    if (!thread) {
      throw new Error("no thread found");
    }

    const existingSaved = await ctx.db
      .query("savedThreads")
      .withIndex("by_user_by_thread", (q) =>
        q.eq("userId", args.userId).eq("threadId", args.id)
      )
      .unique();

    if (existingSaved) {
      throw new Error("thread already saved");
    }

    await ctx.db.insert("savedThreads", {
      userId: args.userId,
      threadId: args.id,
    });

    return thread;
  },
});

export const unSavedThreads = mutation({
  args: { id: v.id("threads"), userId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    const thread = await ctx.db.get(args.id);

    if (!thread) {
      throw new Error("Thread not found");
    }

    const existingFavorites = await ctx.db
      .query("savedThreads")
      .withIndex("by_user_by_thread", (q) =>
        q.eq("userId", args.userId).eq("threadId", args.id)
      )
      .unique();

    if (existingFavorites) {
      await ctx.db.delete(existingFavorites._id);
    }

    // await ctx.db.delete(args.id);
    return thread;
  },
});

export const getSavedThreadByUser = query({
  args: { userId: v.string() },

  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthrozied");

    const saved = await ctx.db
      .query("savedThreads")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();

    const ids = saved.map((t) => t.threadId);

    const threads = await getAllOrThrow(ctx.db, ids);

    return threads.map((thread) => ({
      ...thread,
    }));
  },
});

export const getSavedThreads = query({
  args: {
    threadId: v.id("threads"),
  },
  handler: async (ctx, args) => {
    const threads = ctx.db.get(args.threadId);
    return threads;
  },
});

export const getSaved = query({
  args: {
    id: v.id("threads"),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const thread = await ctx.db
      .query("savedThreads")
      .withIndex("by_user_by_thread", (q) =>
        q.eq("userId", args.userId).eq("threadId", args.id)
      )
      .unique();
    return thread;
  },
});
