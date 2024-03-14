"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Id } from "@/convex/_generated/dataModel";
import { Ellipsis } from "lucide-react";

interface ActionButtonProps {
  id: Id<"threads">;
}

const ActionButton = ({ id }: ActionButtonProps) => {
  return (
    // <Popover>
    //   <PopoverTrigger asChild className="z-10">
    //     <Button variant={"ghost"} className="" size={"sm"}>
    //       <Ellipsis />
    //     </Button>
    //   </PopoverTrigger>
    //   <PopoverContent>
    //     <div>x</div>
    //   </PopoverContent>
    // </Popover>
    <DropdownMenu >
      <DropdownMenuTrigger>
        <Button variant={"ghost"} className="" size={"sm"}>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex flex-col">
          <Button variant={"ghost"} className="" size={"sm"}>
            <Ellipsis />
          </Button>
          <Button variant={"ghost"} className="" size={"sm"}>
            <Ellipsis />
          </Button>
          <Button variant={"ghost"} className="" size={"sm"}>
            <Ellipsis />
          </Button>
          <Button variant={"ghost"} className="" size={"sm"}>
            <Ellipsis />
          </Button>
          <Button variant={"ghost"} className="" size={"sm"}>
            <Ellipsis />
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionButton;
