import { ModeToggle } from "@/components/drak-mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SignOutButton } from "@clerk/nextjs";

import { Ellipsis } from "lucide-react";
import Link from "next/link";

const ActionButton = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"ghost"}>
          <Ellipsis />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <div className="flex flex-col space-y-1 w-full">
          <Button className="w-full" asChild variant={"ghost"}>
            <Link href={"/setting"}>Settings</Link>
          </Button>
          <Button className="w-full" asChild variant={"ghost"}>
            <Link href={"/save"}>Save</Link>
          </Button>
          <Button className="w-full" asChild variant={"ghost"}>
            <Link href={"/likes"}>Your likes</Link>
          </Button>
          <Button className="w-full" asChild variant={"ghost"}>
            <SignOutButton />
          </Button>
          
          <ModeToggle />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ActionButton;
