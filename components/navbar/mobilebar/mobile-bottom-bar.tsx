"use client";
import Link from "next/link";
import CreatePostDialog from "@/components/modal/create-post-modala";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, HomeIcon, Search, SquarePen, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import usePostModal from "@/hooks/use-post-modal";
import { useCallback } from "react";

const MobileBottombar = ({ userId }: { userId: string | undefined }) => {
  const pathname = usePathname();
  const isActive = pathname;
  const createPostModal = usePostModal();
  const toggleCreatePost = useCallback(() => {
    
    createPostModal.onOpen();
  }, [createPostModal]);


  return (
    <div className="flex items-center justify-around w-full h-16 p-1">
      <Button
        variant={"ghost"}
        asChild
        className={cn("text-purple-100 h-full", isActive)}
      >
        <Link href={"/"}>
          <HomeIcon />
        </Link>
      </Button>
      <Button variant={"ghost"} className="h-full">
        <Link
          href={"/search"}
          className={cn("text-purple-100", isActive && "fill-blue-400")}
        >
          <Search />
        </Link>
      </Button>
      <Button
        variant={"ghost"}
        className="h-full"
        size={"lg"}
        onClick={toggleCreatePost}
      >
        <SquarePen />
      </Button>
      <Button variant={"ghost"} className="h-full">
        <Link
          href={`/activity/${userId}`}
          className={cn("text-purple-100", isActive && "fill-blue-400")}
        >
          <Heart />
        </Link>
      </Button>
      <Button variant={"ghost"} className="h-full" size={"sm"}>
        <Link
          href={`/profile/${userId}`}
          className={cn("text-purple-100", isActive && "fill-blue-400")}
        >
          <UserRound />
        </Link>
      </Button>
    </div>
  );
};

export default MobileBottombar;
