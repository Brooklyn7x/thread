import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";
import { threadId } from "worker_threads";

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
    imageUrl: v.id("_storage"),
    url: v.optional(v.string()),
  }).index("by_user", ["userId"]),
  // .index("by_threadId", ["threads"]),

  comments: defineTable({
    threadId: v.id("threads"),
    userId: v.string(),
    comments: v.string(),
  })
    .index("by_thread", ["threadId"])
    .index("by_user", ["userId"]),

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

  imageStore: defineTable({
    userId: v.string(),
    threadId: v.id("threads"),
  }).index("by_thread", ["threadId"]),

  followers: defineTable({
    userId: v.string(),
  }).index("by_user", ["userId"]),

  notifications: defineTable({
    type: v.string(),
    userId: v.string(),
    actorId: v.string(),
    entityId: v.string(),
    entityType: v.string(),
    isRead: v.boolean(),
  }).index("by_user", ["userId"]),
});
