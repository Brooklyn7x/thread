"use client";

import * as React from "react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle({ onClosePopover }: { onClosePopover: () => void }) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 text-sm" onClick={onClosePopover}>
        Appearance
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="mr-[180px] -mt-10">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <MoonIcon />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
         <SunIcon />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
