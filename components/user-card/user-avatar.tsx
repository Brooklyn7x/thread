import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

const UserAvater = () => {
  const currentUser = useUser();

  return (
    <Avatar>
      <AvatarImage src={currentUser.user?.imageUrl} />
      <AvatarFallback>{currentUser.user?.username?.charAt(0)}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvater;
