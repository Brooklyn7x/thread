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

const NavbarActionButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ListFilter className="text-muted-foreground hover:text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 rounded-2xl mr-4 bg-neutral-900">
        <ModeToggle />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/setting"}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/saved"} className="w-full">
            Saved
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/likes"}>Your likes</Link>
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
