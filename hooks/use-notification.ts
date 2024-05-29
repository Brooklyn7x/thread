import { Id } from "@/convex/_generated/dataModel";
import { markNotificationAsRead } from "@/convex/notifications";
import { create } from "zustand";

interface Notification {
  _id: Id<"notifications">;
  _creationTime: number;
  userId: string;
  type: string;
  actorId: string;
  entityId: string;
  entityType: string;
  isRead: boolean;
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  //   markNotificationAsRead: (notificationsId: string) => void;
}

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, notification],
    })),
  //   markNotificationAsRead: async (notificationId) => {
  //     try {
  //       await markNotificationAsRead({ notificationId,  });
  //       set((state) => ({
  //         notifications: state.notifications.map((notif) =>
  //           notif.id === notificationId ? { ...notif, isRead: true } : notif
  //         ),
  //       }));
  //     } catch (error) {
  //       console.error("Failed to mark notification as read:", error);
  //     }
  //   },
}));

export default useNotificationStore;
