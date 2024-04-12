"use client";
import { useUser } from "@clerk/nextjs";
import MobileBottombar from "./mobile-bottom-bar";

const Mobilebar = () => {
  const { user } = useUser();
  return (
    <div className="sm:hidden bottom-0 fixed h-[74px] flex items-center bg-black z-50 w-full px-2">
      <MobileBottombar userId={user?.id} />
    </div>
  );
};

export default Mobilebar;
