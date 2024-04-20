"use client";
import Link from "next/link";
import CreatePostDialog from "@/components/modal/create-post-modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, HomeIcon, Search, SquarePen, UserRound } from "lucide-react";

const MobileBottombar = ({ userId }: { userId: string | undefined }) => {
  const isActive = null;
  // const isActive = router.pathname || router.pathname === "/";

  return (
    <div className="flex items-center justify-evenly w-full h-full px-4">
      <Button
        variant={"ghost"}
        size={"sm"}
        asChild
        className={cn("text-purple-100", isActive && "fill-blue-400")}
      >
        <Link href={"/"}>
          <HomeIcon />
        </Link>
      </Button>
      <Button variant={"ghost"} className="h-full" size={"sm"}>
        <Link
          href={"/search"}
          className={cn("text-purple-100", isActive && "fill-blue-400")}
        >
          <Search />
        </Link>
      </Button>
      <CreatePostDialog>
        <Button variant={"ghost"} className="h-full" size={"sm"}>
          <SquarePen />
        </Button>
      </CreatePostDialog>
      <Button variant={"ghost"} className="h-full" size={"sm"}>
        <Link
          href={"/activity"}
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
