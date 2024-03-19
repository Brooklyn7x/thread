import Image from "next/image";

interface ProfileHeaderProps {
  username: string;
  displayName: string;
  imageUrl: string;
  bio: string;
}

export const ProfileHeader = ({
  displayName,
  imageUrl,
  username,
  bio,
}: ProfileHeaderProps) => {
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-col w-full">
          <h2 className="pt-1 text-xl font-bold">{displayName}</h2>
          <span className="text-sm">{username}</span>
        </div>
        <div>
          <Image src={imageUrl} height={84} width={84} alt="profile-image" />
        </div>
      </div>
      <span className="w-full">{bio}</span>
    </div>
  );
};
