import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAll = query({
  handler: async (ctx) => {
    const thread = await ctx.db.query("threads").order("desc").collect();
    const threads = await Promise.all(
      thread.map(async (thread) => ({
        ...thread,
        url: await ctx.storage.getUrl(thread.imageUrl),
      }))
    );
    return threads;
  },
});

export const getSearchs = query({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const name = args.name as string;
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthrozied");
    const searchData = ctx.db
      .query("users")
      .withSearchIndex("search_user", (q) => q.search("name", name))
      .collect();

    return searchData;
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

export const getThreadByUser = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthrozied");
    const thread = await ctx.db
      .query("threads")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
    const threads = await Promise.all(
      thread.map(async (thread) => ({
        ...thread,
        url: await ctx.storage.getUrl(thread.imageUrl),
      }))
    );
    return threads;
  },
});

// export const get_user_by_id = query({
//   args: { authorId: v.id("authorId") },
//   handler: async (ctx, args) => {
//     const data = await ctx.db
//       .query("threads")
//       .withIndex("by_author", (q) => q.eq("authorId", args.authorId))
//       .order("desc")
//       .collect();
//     return data;
//   },
// });

// export const update_thread_by_id = mutation({
//   args: {
//     id: v.id("threads"),
//     content: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const identity = await ctx.auth.getUserIdentity();

//     if (!identity) throw new Error("Unauthrozied");

//     const edit = await ctx.db.patch(args.id, {
//       content: args.content,
//     });

//     return edit;
//   },
// });
