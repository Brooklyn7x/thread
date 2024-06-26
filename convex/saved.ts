import { threadId } from "worker_threads";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAllOrThrow } from "convex-helpers/server/relationships";

export const savedThreads = mutation({
  args: {
    threadId: v.id("threads"),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    const thread = await ctx.db.get(args.threadId);

    if (!thread) {
      throw new Error("no thread found");
    }

    const existingSaved = await ctx.db
      .query("savedThreads")
      .withIndex("by_user_by_thread", (q) =>
        q.eq("userId", args.userId).eq("threadId", args.threadId)
      )
      .unique();

    if (existingSaved) {
      throw new Error("thread already saved");
    }

    await ctx.db.insert("savedThreads", {
      userId: args.userId,
      threadId: args.threadId,
    });

    return thread;
  },
});

export const unSavedThreads = mutation({
  args: { threadId: v.id("threads"), userId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    const thread = await ctx.db.get(args.threadId);

    if (!thread) {
      throw new Error("Thread not found");
    }

    const existingFavorites = await ctx.db
      .query("savedThreads")
      .withIndex("by_user_by_thread", (q) =>
        q.eq("userId", args.userId).eq("threadId", args.threadId)
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

    const threadsWithUrls = await Promise.all(threads.map(async (thread) => {
      const imageUrl = thread.imageUrl ? await ctx.storage.getUrl(thread.imageUrl) : null;
      return {
        ...thread,
        url: imageUrl,
      };
    }));

    return threadsWithUrls
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
    threadId: v.id("threads"),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const thread = await ctx.db
      .query("savedThreads")
      .withIndex("by_user_by_thread", (q) =>
        q.eq("userId", args.userId).eq("threadId", args.threadId)
      )
      .unique();
    return thread;
  },
});
