import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    const post = await ctx.db.insert("threads", {
      title: args.title,
      content: args.title,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: args.imageUrl,
    });
  },
});

export const remove = mutation({
  args: {
    id: v.id("threads"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    await ctx.db.delete(args.id);
  },
});

export const updateThread = mutation({
  args: {
    id: v.id("threads"),
    content: v.string(),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    await ctx.db.patch(args.id, {
      content: args.content,
      imageUrl: args.image,
    });
  },
});

export const get = query({
  args: {
    id: v.id("threads"),
  },
  handler: async (ctx, args) => {
    const threads = ctx.db.get(args.id);

    return threads;
  },
});
export const getThread = query({
  args: {
    id: v.id("threads"),
  },
  handler: async (ctx, args) => {
    const threads = ctx.db.get(args.id);
    return threads;
  },
});

// export const create = mutation({ args: {}, handler: async (ctx, args) => {} });
