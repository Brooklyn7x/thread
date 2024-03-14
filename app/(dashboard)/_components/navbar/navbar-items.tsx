import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Heart,
  HomeIcon,
  Search,
  SquarePen,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import CreatePost from "../create-post";

const NavbarItems = () => {
  return (
    <div className="flex items-center h-full mt-1">
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
        <Link href={"/profile"}>
          <UserRound />
        </Link>
      </Button>
    </div>
  );
};

export default NavbarItems;
