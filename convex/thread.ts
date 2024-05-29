import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const createThread = mutation({
  args: {
    content: v.string(),
    imageUrl: v.id("_storage"),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("threads", {
      content: args.content,
      imageUrl: args.imageUrl,
      userId: args.userId,
    });
  },
});

export const removeThread = mutation({
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
    imageUrl: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    await ctx.db.patch(args.id, {
      content: args.content,
      imageUrl: args.imageUrl,
    });
  },
});

export const getThreadById = query({
  args: {
    threadId: v.id("threads"),
  },

  handler: async (ctx, args) => {
   
    const thread = await ctx.db.get(args.threadId);
    
    if (!thread) {
      throw new Error("Thread not found");
    }
    
    
    const imageUrl = thread.imageUrl ? await ctx.storage.getUrl(thread.imageUrl) : null;


    return {
      ...thread,
      url: imageUrl,
    };
  },
});

// export const create = mutation({ args: {}, handler: async (ctx, args) => {} });
