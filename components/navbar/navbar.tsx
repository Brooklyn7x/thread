import ActionButton from "./navbar-action-button";
import { Logo } from "./navbar-logo";
import NavbarItems from "./navbar-items";

const Navbar = () => {
  return (
    <div className="top-0 fixed w-full flex items-center justify-between  h-[74px] bg-[#ffffffd9] dark:bg-[#101010D9] z-10 px-5">
      <div className="px-5">
        <Logo />
      </div>
      <div className="hidden h-full sm:block">
        <NavbarItems />
      </div>
      <ActionButton />
    </div>
  );
};

export default Navbar;