// ThemeToggle.tsx

import * as React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";


const ThemeToggle = ({ onClick }: { onClick: () => void }) => {
  const { setTheme } = useTheme();

  const handleSetLightTheme = React.useCallback(
    () => setTheme("light"),
    [setTheme]
  );
  const handleSetDarkTheme = React.useCallback(
    () => setTheme("dark"),
    [setTheme]
  );
  const handleSetSystemTheme = React.useCallback(
    () => setTheme("system"),
    [setTheme]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 text-sm" onClick={onClick}>
        Theme
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="mr-[180px] -mt-10">
        <DropdownMenuItem onClick={handleSetLightTheme}>
          <MoonIcon /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSetDarkTheme}>
          <SunIcon /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSetSystemTheme}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default React.memo(ThemeToggle);
