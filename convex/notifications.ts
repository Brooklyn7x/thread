import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createNotification = mutation({
  args: {
    type: v.string(),
    userId: v.id("user"),
    actorId: v.id("user"),
    entityId: v.string(),
    entityType: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("notifications", {
      type: args.type,
      userId: args.userId,
      actorId: args.actorId,
      entityId: args.entityId,
      entityType: args.entityType,
      isRead: false,
    });
  },
});

export const fetchNotifications = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const notifications = await ctx.db
      .query("notifications")
      .withIndex("by_user", (qry) => qry.eq("userId", args.userId))
      .order("asc")
      .collect();
    return notifications;
  },
});

export const markNotificationAsRead = mutation({
  args: {
    notificationId: v.id("notifications"),
  },
  handler: async (ctx, args) => {
    const notification = await ctx.db.get(args.notificationId);
    if (!notification) {
      throw new Error("Notification not found");
    }

    const updatedNotification = {
      ...notification,
      isRead: true,
    };

    await ctx.db.patch(args.notificationId, {
      isRead: true,
    });

    return updatedNotification;
  },
});
