import { Button } from "@/components/ui/button";
import { Heart, HomeIcon, Search, SquarePen, UserRound } from "lucide-react";
import Link from "next/link";
import CreatePost from "../modal/create-post-modal";

import { auth } from "@clerk/nextjs";

const NavbarItems = async () => {
  const user = await auth();
  return (
    <div className="flex items-center justify-between w-full h-full px-4">
      <Button asChild variant={"ghost"} className="h-full" size={"lg"}>
        <Link href={"/"}>
          <HomeIcon />
        </Link>
      </Button>
      <Button asChild variant={"ghost"} className="h-full" size={"lg"}>
        <Link href={"/search"}>
          <Search />
        </Link>
      </Button>
      <CreatePost>
        <Button variant={"ghost"} className="h-full" size={"lg"}>
          <SquarePen />
        </Button>
      </CreatePost>
      <Button asChild variant={"ghost"} className="h-full" size={"lg"}>
        <Link href={"/activity"}>
          <Heart />
        </Link>
      </Button>
      <Button asChild variant={"ghost"} className="h-full" size={"lg"}>
        <Link href={`/profile/${user.userId}`}>
          <UserRound />
        </Link>
      </Button>
    </div>
  );
};

export default NavbarItems;
