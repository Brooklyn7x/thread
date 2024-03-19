import React from "react";
import Navbar from "./_components/navbar";
import Mobilebar from "./_components/mobilebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <Navbar />
      <div className="max-w-xl px-5 pt-20 mx-auto">{children}</div>
      <Mobilebar />
    </main>
  );
};

export default DashBoardLayout;
