// Avatar component
import {
  Avatar as BaseAvatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

const Avatar = () => {
  const currentUser = useUser();

  return (
    <BaseAvatar>
      <AvatarImage src={currentUser.user?.imageUrl} />
      <AvatarFallback>{currentUser.user?.username?.charAt(0)}</AvatarFallback>
    </BaseAvatar>
  );
};

export default Avatar;
