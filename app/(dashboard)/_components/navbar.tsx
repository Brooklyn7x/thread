import ActionButton from "./navbar/action-button";
import { Logo } from "./navbar/logo";
import NavbarItems from "./navbar/navbar-items";

const Navbar = () => {
  return (
    <div className="top-0 fixed w-full flex items-center justify-between  h-[74px] bg-[#101010D9] z-10 ">
      <div className="px-5">
        <Logo />
      </div>
      <div className="hidden sm:block h-full">
        <NavbarItems />
      </div>
      <ActionButton />
    </div>
  );
};

export default Navbar;
