// Import necessary modules
import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

// Define database schema
export default defineSchema({
  // Threads table definition
  threads: defineTable({
    // id: v.string(), // Unique identifier for the thread
    authorId: v.string(), // Identifier for the author of the thread
    authorName: v.string(), // Name of the author of the thread
    title: v.string(), // Title of the thread
    content: v.string(), // Content of the thread
    imageUrl: v.optional(v.string()), // URL of an image associated with the thread (optional)
    // Timestamp indicating when the thread was created
  })
    .index("by_author", ["authorId"]) // Index threads by author ID
    .searchIndex("search_title", {
      searchField: "title", // Search index for thread titles
    }),

  // UserFavorites table definition
  userFavorites: defineTable({
    id: v.string(), // Unique identifier for the favorite
    userId: v.string(), // Identifier for the user who favorited the thread
    threadId: v.id("threads"), // Identifier for the thread being favorited
    // created_at: v.timestamp(), // Timestamp indicating when the favorite was created
  })
    .index("by_user", ["userId"]) // Index user favorites by user ID
    .index("by_thread", ["threadId"]), // Index user favorites by thread ID
});
