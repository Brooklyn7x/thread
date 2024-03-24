// // import { v } from "convex/values";
// // import { mutation, query } from "./_generated/server";

// // // export const getLike = query({
// // //   args: { id: v.id("likes") },
// // //   handler: async (ctx) => {
// // //     const exliked = ctx.db.query("likes").order("desc").collect();
// // //     return threads;
// // //   },
// // // });

// // export const createlike = mutation({
// //   args: {
// //     id: v.id("threads"),
// //   },
// //   handler: async (ctx, args) => {
// //     const identity = await ctx.auth.getUserIdentity();

// //     if (!identity) throw new Error("Unauthroied");

// //     const userId = identity.subject;

// //     const exisitngLike = await ctx.db
// //       .query("likes")
// //       .withIndex("by_thread_by_user", (q) =>
// //         q.eq("userId", userId).eq("threadId", args.id)
// //       )
// //       .unique();

// //     if (exisitngLike) {
// //       await ctx.db.delete(exisitngLike._id);
// //     }

// //     await ctx.db.insert("likes", {
// //       userId: identity.subject,
// //       threadId: args.id,
// //     });
// //   },
// // });

// import { v } from "convex/values";
// import { mutation } from "./_generated/server";

// export const createlike = mutation({
//   args: {
//     id: v.id("threads"),
//   },
//   handler: async (ctx, args) => {
//     const identity = await ctx.auth.getUserIdentity();

//     if (!identity) {
//       throw new Error("Unauthorized");
//     }

//     const userId = identity.subject;

//     try {
//       const existingLike = await ctx.db
//         .query("likes")
//         .withIndex("by_thread_by_user", (q) =>
//           q.eq("userId", userId).eq("threadId", args.id)
//         )
//         .unique();

//       if (existingLike) {
//         // await ctx.db.delete(existingLike._id);
//         throw new Error("Already Liked..");
//       }

//       await ctx.db.insert("likes", {
//         userId: identity.subject,
//         threadId: args.id,
//       });

//       // Optionally return something to indicate success
//       return { success: true };
//     } catch (error) {
//       // Handle database errors or other unexpected errors
//       console.error("Error creating like:", error);
//       throw new Error("Failed to create like");
//     }
//   },
// });

// export const remove = mutation({
//   args: {
//     id: v.id("likes"),
//   },
//   handler: async (ctx, args) => {
//     const identity = await ctx.auth.getUserIdentity();

//     if (!identity) {
//       throw new Error("Unauthorized");
//     }

//     await ctx.db.delete(args.id);
//   },
// });
