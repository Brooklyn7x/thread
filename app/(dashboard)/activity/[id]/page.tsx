"use client";

import { api } from "@/convex/_generated/api";
import useNotificationStore from "@/hooks/use-notification";
import { useQuery } from "convex/react";

type Props = {
  params: {
    id: string;
  };
};

const ActivityPage = ({ params }: Props) => {
  const userId = params.id;
  const notifications = useQuery(api.notifications.fetchNotifications, {
    userId,
  });

  if (!notifications) return null;

  console.log(notifications);

  //   useNotificationStore.setState({ notifications });

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <ul>
        {notifications.map((notification: any) => (
          <li
            key={notification._id}
            className="mb-4 bg-secondary shadow-md rounded-lg p-4"
          >
            {renderNotification(notification)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const renderNotification = (notification: any) => {
  switch (notification.type) {
    case "like":
      return (
        <div>
          <h1 className="text-white-500">
            {notification.actorId} {""}
            <span className="text-neutral-400">liked your post ❤️</span>
          </h1>
        </div>
      );
    case "comment":
      return (
        <div>
          <h1 className="text-green-500">{notification.actorId}</h1> commented
          on your post.
        </div>
      );
    default:
      return <div>Unknown notification type.</div>;
  }
};

export default ActivityPage;
