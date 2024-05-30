import { useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import useNotificationStore from "@/hooks/use-notification";

const useRealTimeNotifications = (userId: string) => {
  const { notifications, hasLoaded, setNotifications, addNotification, setHasLoaded } = useNotificationStore(
    (state) => ({
      notifications: state.notifications,
      hasLoaded: state.hasLoaded,
      setNotifications: state.setNotifications,
      addNotification: state.addNotification,
      setHasLoaded: state.setHasLoaded,
    })
  );

  const fetchedNotifications = useQuery(api.notifications.fetchNotifications, { userId });

  useEffect(() => {
    if (!hasLoaded && fetchedNotifications) {
      setNotifications(fetchedNotifications);
      setHasLoaded(true);
    }
  }, [hasLoaded, fetchedNotifications, setNotifications, setHasLoaded]);

  useEffect(() => {
    if (fetchedNotifications && hasLoaded) {
      const newNotifications = fetchedNotifications.filter(
        (notification) => !notifications.some((n) => n._id === notification._id)
      );
      newNotifications.forEach((notification) => {
        addNotification(notification);
      });
    }
  }, [fetchedNotifications, hasLoaded, notifications, addNotification]);
};

export default useRealTimeNotifications;