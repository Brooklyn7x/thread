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
  hasLoaded: boolean;
  setNotifications: (notifications: Notification[]) => void;
  addNotification: (notification: Notification) => void;
  setHasLoaded: (hasLoaded: boolean) => void;
}

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  hasLoaded: false,
  setNotifications: (notifications) => set({ notifications }),
  addNotification: (notification: Notification) =>
    set((state) => {
      const exists = state.notifications.some(
        (n) => n._id === notification._id
      );
      if (!exists) {
        return { notifications: [...state.notifications, notification] };
      }
      return state;
    }),
  setHasLoaded: (hasLoaded) => set({ hasLoaded }),
}));

export default useNotificationStore;
