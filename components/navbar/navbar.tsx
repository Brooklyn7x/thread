import { Logo } from "./navbar-logo";
import NavbarItems from "./navbar-items";
import NavbarActionButton from "./navbar-action-button";

const Navbar = () => {
  return (
    <div className="top-0 fixed w-full flex items-center justify-center sm:justify-between  h-[74px] bg-[#101010D9] bg-opacity-90  z-50 px-5">
      <div className="sm:pl-10">
        <Logo />
      </div>
      <div className="hidden h-full sm:block p-1">
        <NavbarItems />
      </div>
      <div className="ml-auto sm:ml-0 md:pr-10">
        <NavbarActionButton />
      </div>
    </div>
  );
};

export default Navbar;
