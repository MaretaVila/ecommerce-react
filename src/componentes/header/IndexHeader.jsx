import { useState } from "react";

import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImagen from "@/assets/images/image-avatar.png";

import MenuIcon from "@/componentes/icons/MenuIcon";
import CartIcon from "@/componentes/icons/CartIcon";
import CloseIcon from "@/componentes/icons/CloseIcon";
import NavLinkHeader from "@/componentes/header/NavLinkHeader";
import CartDetailsHeader from "@/componentes/header/CartDetailsHeader";

const IndexHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const [isOpenDetailsCart, setOpenDetailsCart] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <header className="container relative mx-auto flex items-center gap-8 p-2 md:p-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakers}
          alt="Logo sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />
        <nav
          className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${
            isOpenMenu
              ? "absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-5 bg-white p-8"
              : "hidden"
          }`}
        >
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
          <button onClick={() => setOpenDetailsCart(!isOpenDetailsCart)}>
            <CartIcon />
          </button>
          <img src={AvatarImagen} alt="avatar" className="w-10" />
          {isOpenDetailsCart && <CartDetailsHeader />}
        </div>
      </header>
      <span className="hidenn container mx-auto h-[1px] w-full bg-gray-200 md:block"></span>
    </>
  );
};

export default IndexHeader;
