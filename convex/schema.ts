import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  threads: defineTable({
    authorId: v.string(),
    authorName: v.string(),
    title: v.string(),
    content: v.string(),
    imageUrl: v.optional(v.string()),
  })
    .index("by_author", ["authorId"])
    .searchIndex("search_title", {
      searchField: "title",
    }),

  comments: defineTable({
    threadId: v.id("threads"),
    authorId: v.string(),
    content: v.string(),
  }).index("by_thread", ["threadId"]),

  likes: defineTable({
    userId: v.string(),
    threadId: v.id("threads"),
  })
    .index("by_user", ["userId"])
    .index("by_thread", ["threadId"])
    .index("by_thread_by_user", ["userId", "threadId"]),
});
