import { v } from "convex/values";
import { query } from "./_generated/server";

export const getByuser = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const user = ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .collect();
    return user;
  },
});
