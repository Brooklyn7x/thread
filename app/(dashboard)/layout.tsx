import React from "react";
import Navbar from "../../components/navbar/navbar";
import Mobilebar from "../../components/navbar/mobilebar/mobilebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="max-w-3xl pt-20 sm:px-20 mx-auto">{children}</div>
      <Mobilebar />
    </main>
  );
};

export default DashBoardLayout;
