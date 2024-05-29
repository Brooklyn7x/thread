"use client";

import { Button } from "@/components/ui/button";
import { Heart, HomeIcon, Search, SquarePen, UserRound } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import usePostModal from "@/hooks/use-post-modal";
import { useCallback, useEffect, useState } from "react";

const NavbarItems = () => {
  const session = useUser();
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const createPostModal = usePostModal();

  const toggleCreatePost = useCallback(() => {
    if (!session) {
      return null;
    }
    createPostModal.onOpen();
  }, [session, createPostModal]);

  return (
    <div className="flex items-center justify-between w-full h-full px-4">
      <Button
        variant={"ghost"}
        className={cn("h-full", isMainPage)}
        size={"lg"}
      >
        <Link href={"/"}>
          <HomeIcon />
        </Link>
      </Button>
      <Button
        variant={"ghost"}
        className={cn("h-full ", pathname === "/search" && "bg-secondary")}
        size={"lg"}
      >
        <Link href={"/search"}>
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
      <Button asChild variant={"ghost"} className="h-full" size={"lg"}>
        <Link
          href={`/activity/${session?.user?.id}`}
          className={cn("", pathname === "/activity" && "bg-secondary")}
        >
          <Heart />
        </Link>
      </Button>
      <Button asChild variant={"ghost"} className="h-full" size={"lg"}>
        <Link
          href={`/profile/${session?.user?.id}`}
          className={cn(
            "",
            pathname === `/profile/${session?.user?.id}` && "bg-secondary"
          )}
        >
          <UserRound />
        </Link>
      </Button>
    </div>
  );
};

export default NavbarItems;
