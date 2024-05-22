"use client";

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
import { useCallback, useState } from "react";
import ThemeToggle from "../drak-mode-toggle";

const NavbarActionButton = () => {
  const [openPopover, setOpenPopver] = useState(false);

  const onTogglePopover = useCallback(() => {
    setOpenPopver((prev) => !prev);
  }, []);

  return (
    <DropdownMenu open={openPopover} onOpenChange={setOpenPopver}>
      <DropdownMenuTrigger asChild>
        <ListFilter className="text-muted-foreground hover:text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40 rounded-2xl mr-4 bg-neutral-900"
        align="end"
        alignOffset={5}
      >
        <ThemeToggle onClick={onTogglePopover} />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/setting"}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/saved"} className="w-full" onClick={onTogglePopover}>
            Saved
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={""} onClick={onTogglePopover}>
            Your likes
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarActionButton;
