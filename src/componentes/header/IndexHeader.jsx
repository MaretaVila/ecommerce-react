import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImagen from "@/assets/images/image-avatar.png";
import MenuIcon from "@/componentes/icons/MenuIcon";
import CartIcon from "@/componentes/icons/CartIcon";
import CloseIcon from "@/componentes/icons/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "@/componentes/header/NavLinkHeader";

const IndexHeader = () => {
  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static md:mr-auto md:h-auto md:flex md:flex-row md:gap-4 md:p-0"
  );

  const handleOpenMenu = () => {
    setNavClass(
      "z-10 absolute font-bold top-0 left-0 h-full p-8 gap-y-5 w-4/5 flex flex-col bg-white md:static md:mr-auto md:h-auto md:flex md:flex-row md:gap-4 md:p-0"
    );
  };

  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold md:static md:mr-auto md:h-auto md:flex md:flex-row md:gap-4 md:p-0"
    );
  };

  return (
    <>
      <header className="container mx-auto flex items-center gap-8 p-4 md:p-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakers}
          alt="Logo sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />
        <nav className={navClass}>
          <button className="mb-8 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Men" />
          <NavLinkHeader text="Women" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImagen} alt="avatar" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto hidenn h-[1px] bg-gray-200 w-full md:block"></span>
    </>
  );
};

export default IndexHeader;
