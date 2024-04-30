import { Button } from "@/components/ui/button";
import { Heart, HomeIcon, Search, SquarePen, UserRound } from "lucide-react";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import dynamic from "next/dynamic";
const DynamicCreatePost = dynamic(() => import("../modal/create-post-modal"), {
  ssr: false,
});

const NavbarItems = async (session : any) => {
  
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
      <DynamicCreatePost>
        <Button variant={"ghost"} className="h-full" size={"lg"}>
          <SquarePen />
        </Button>
      </DynamicCreatePost>
      <Button asChild variant={"ghost"} className="h-full" size={"lg"}>
        <Link href={"/activity"}>
          <Heart />
        </Link>
      </Button>
      <Button asChild variant={"ghost"} className="h-full" size={"lg"} >
        <Link href={`/profile/${session.userId}`}>
          <UserRound />
        </Link>
      </Button>
    </div>
  );
};

export default NavbarItems;
