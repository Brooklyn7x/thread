import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// export const create = mutation({ args: {}, handler: async (ctx, args) => {} });

export const createComments = mutation({
  args: {
    id: v.id("threads"),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthrozied");

    await ctx.db.insert("comments", {
      threadId: args.id,
      authorId: identity.subject,
      content: args.content,
    });
  },
});
