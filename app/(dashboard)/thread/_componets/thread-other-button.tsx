"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

export const ThreadOtherAction = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem>Save</DropdownMenuItem>
        <DropdownMenuItem>Hide</DropdownMenuItem>
        <DropdownMenuItem>Mute</DropdownMenuItem>
        <DropdownMenuItem>Unfollow</DropdownMenuItem>
        <DropdownMenuItem>Report</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
