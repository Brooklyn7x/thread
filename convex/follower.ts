import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const follow = mutation({
    args: {
      userId: v.string(),
    },
    handler: async (ctx, args) => {
      const identity = await ctx.auth.getUserIdentity();
  
      if (!identity) throw new Error("Unauthrozied");

      const alreadyFollowing = await ctx.db
        .query("followers")
        .withIndex("by_user", (q) =>
          q.eq("userId", args.userId)
        )
        .unique();
  
      if (alreadyFollowing) {
        throw new Error("thread already saved");
      }
  
      await ctx.db.insert("followers", {
        userId: args.userId,
      });
    },
  });