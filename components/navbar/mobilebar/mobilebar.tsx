import NavbarItems from "../navbar-items";

const Mobilebar = () => {
  return (
    <div className="sm:hidden bottom-0 fixed h-[74px] w-full flex items-center bg-[#101010D9]">
      <NavbarItems />
    </div>
  );
};

export default Mobilebar;
