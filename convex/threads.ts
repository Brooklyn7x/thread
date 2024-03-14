import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    const threads = ctx.db.query("threads").order("desc").collect();

    return threads;
  },
});
