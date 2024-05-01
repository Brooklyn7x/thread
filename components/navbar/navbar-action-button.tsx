"use client";
import { ModeToggle } from "@/components/drak-mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SignOutButton } from "@clerk/nextjs";
import { ListFilter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavbarActionButton = () => {
  const [openPopover, setOpenPopver] = useState(false);
  const onClosePopover = () => {
    setOpenPopver(!openPopover);
  };
  return (
    <DropdownMenu open={openPopover} onOpenChange={setOpenPopver} >
      <DropdownMenuTrigger asChild>
        <ListFilter className="text-muted-foreground hover:text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 rounded-2xl mr-4 bg-neutral-900" align="end" alignOffset={5} >
        <ModeToggle  onClosePopover={onClosePopover}/>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/setting"}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href={"/saved"}
            className="w-full"
            onClick={onClosePopover}
          >
            Saved
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/likes"}  onClick={onClosePopover}>Your likes</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton  />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarActionButton;
