import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const toggleFollow = mutation({
  args: {
    followerId: v.string(),
    followingId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthrozied");

    const existingFollow = await ctx.db
      .query("follow")
      .withIndex("by_follower_and_following", (q) =>
        q.eq("followerId", args.followerId).eq("followingId", args.followingId)
      )
      .unique();

    if (existingFollow) {
      await ctx.db.delete(existingFollow._id);
    } else {
      await ctx.db.insert("follow", {
        followerId: args.followerId,
        followingId: args.followingId,
      });

      await ctx.db.insert("notifications", {
        type: "follow",
        userId: args.followingId,
        actorId: args.followerId,
        entityId: args.followingId,
        entityType: "follow",
        isRead: false,
      });
    }
  },
});
export const getFollowers = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const followers = await ctx.db
      .query("follow")
      .withIndex("by_following", (q) => q.eq("followingId", args.userId))
      .collect();
    return followers;
  },
});

export const getFollowing = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const following = await ctx.db
      .query("follow")
      .withIndex("by_follower", (q) => q.eq("followerId", args.userId))
      .collect();
    return following;
  },
});
