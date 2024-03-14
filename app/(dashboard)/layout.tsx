import React from "react";
import Navbar from "./_components/navbar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <Navbar />
      <div className="pt-20 max-w-xl mx-auto px-5">{children}</div>
    </main>
  );
};

export default DashBoardLayout;
