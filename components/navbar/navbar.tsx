import { Logo } from "./navbar-logo";
import NavbarItems from "./navbar-items";
import NavbarActionButton from "./navbar-action-button";


const Navbar = (session: any) => {
  return (
    <div className="top-0 fixed w-full flex items-center justify-center sm:justify-between z-50 backdrop-blur-xl bg-background/60">
      <div className="mx-5 h-16 sm:h-[74px] flex w-full items-center justify-between">
        <Logo />

        <div className="hidden h-full sm:block p-1">
          <NavbarItems />
        </div>

        <div className="ml-auto sm:ml-0">
          <NavbarActionButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
