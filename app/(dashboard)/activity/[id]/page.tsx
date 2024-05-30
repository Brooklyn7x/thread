"use client";

import UserCardName from "@/components/user-card/user-card-name";
import UserImage from "@/components/user-card/user-image";
import useNotificationStore from "@/hooks/use-notification";
import useRealTimeNotifications from "@/hooks/use-real-notification";
import { formatTime } from "@/lib/utils";

type Props = {
  params: {
    id: string;
  };
};

const ActivityPage = ({ params }: Props) => {
  const userId = params.id;
  useRealTimeNotifications(userId);
  const notifications = useNotificationStore((state) => state.notifications);
  return (
    <div className="max-w-sm md:max-w-lg mx-auto mt-8 p-2">
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
  const createdAtLabel = formatTime(notification._creationTime);
  switch (notification.type) {
    case "like":
      return (
        <div className="flex gap-4 items-center">
          <UserImage userId={notification.actorId} />
          <UserCardName userId={notification.actorId} />
          <span className="text-neutral-400">liked your post ❤️</span>
          <span className="text-sm text-muted-foreground">{createdAtLabel}</span>
        </div>
      );
    case "comment":
      return (
        <div className="flex gap-4 items-center">
          <UserImage userId={notification.actorId} />
          <UserCardName userId={notification.actorId} />
          <span className="text-neutral-400">Comment your post 💬</span>
          <span className="text-sm text-muted-foreground">{createdAtLabel}</span>
        </div>
      );

      case "follow":
      return (
        <div className="flex gap-4 items-center">
          <UserImage userId={notification.actorId} />
          <UserCardName userId={notification.actorId} />
          <span className="text-neutral-400">Follow you</span>
          <span className="text-sm text-muted-foreground">{createdAtLabel}</span>
        </div>
      );
    default:
      return <div>Unknown notification type.</div>;
  }
};

export default ActivityPage;
