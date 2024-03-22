import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { threadId } from "worker_threads";

export const get = query({
  handler: async (ctx) => {
    const threads = ctx.db.query("threads").order("desc").collect();
    return threads;
  },
});

export const getThread = query({
  args: { threadId: v.id("threads") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthrozied");

    const threads = await ctx.db.get(args.threadId);
    if (!threads) return null;
    
    return { ...threads };
  },
});

export const get_thread_by_user_therad_id = query({
  args: { threadId: v.id("threads") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthrozied");
    const threads = ctx.db.get(args.threadId);
    return threads;
  },
});

export const get_user_by_id = query({
  args: { authorId: v.id("authorId") },
  handler: async (ctx, args) => {
    const data = await ctx.db
      .query("threads")
      .withIndex("by_author", (q) => q.eq("authorId", args.authorId))
      .order("desc")
      .collect();
    return data;
  },
});

export const update_thread_by_id = mutation({
  args: {
    id: v.id("threads"),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    const edit = await ctx.db.patch(args.id, {
      content: args.content,
    });

    return edit;
  },
});
