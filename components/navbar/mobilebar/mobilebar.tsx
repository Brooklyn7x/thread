"use client";
import { useUser } from "@clerk/nextjs";
import MobileBottombar from "./mobile-bottom-bar";

const Mobilebar = () => {
  const { user } = useUser();
  return (
    <div className="sm:hidden bottom-0 fixed flex items-center justify-center backdrop-blur-xl bg-background/60 z-50 w-full">
      <MobileBottombar userId={user?.id} />
    </div>
  );
};

export default Mobilebar;
