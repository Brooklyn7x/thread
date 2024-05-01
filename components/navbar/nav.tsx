import { auth } from "@clerk/nextjs";
import { Suspense } from "react";
import Navbar from "./navbar";

const Nav = () => {
  return (
    <Suspense>
      <NavRSC />
    </Suspense>
  );
};

async function NavRSC() {
  const session = await auth();
  return <Navbar session={session} />;
}

export default Nav;
