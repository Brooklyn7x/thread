import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    userId: v.string(),
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    username: v.optional(v.string()),
  })
    .index("by_tokenIdentifier", ["tokenIdentifier"])
    .index("by_userId", ["userId"])
    .searchIndex("search_user", { searchField: "name" }),

  threads: defineTable({
    userId: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
  })
    .index("by_user", ["userId"]),
  

  comments: defineTable({
    threadId: v.id("threads"),
    userId: v.string(),
    comments: v.string(),
  }).index("by_thread", ["threadId"]),

  likes: defineTable({
    userId: v.string(),
    threadId: v.id("threads"),
  })
    .index("by_user", ["userId"])
    .index("by_thread", ["threadId"])
    .index("by_user_by_thread", ["userId", "threadId"]),

  savedThreads: defineTable({
    userId: v.string(),
    threadId: v.id("threads"),
  })
    .index("by_user", ["userId"])
    .index("by_thread", ["threadId"])
    .index("by_user_by_thread", ["userId", "threadId"]),

  // followers: defineTable({
  //   followerId: v.id("users"),
  //   userId: v.id("users"),
  // })
  //   .index("by_user", ["userId"])
  //   .index("by_follower", ["followerId"]),
});
