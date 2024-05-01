import React from "react";
import Navbar from "../../components/navbar/navbar";
import Mobilebar from "../../components/navbar/mobilebar/mobilebar";
import Nav from "@/components/navbar/nav";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Nav />
      <div className="max-w-screen-md pt-20 sm:px-20 mx-auto min-h-screen pb-16 sm:pb-0">
        {children}
      </div>
      <Mobilebar />
    </main>
  );
};

export default DashBoardLayout;
