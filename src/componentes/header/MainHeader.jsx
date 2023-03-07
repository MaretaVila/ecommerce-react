import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImagen from "@/assets/images/image-avatar.png";
import MenuIcon from "@/componentes/icons/MenuIcon";
import CartIcon from "@/componentes/icons/CartIcon";

const MainHeader = () => {
  return (
    <header className="flex">
      <button className="md:hidden">
        <MenuIcon />
      </button>
      <img src={LogoSneakers} alt="Logo sneakers" className="mr-auto md:mr-0" />
      <nav className="hidden md:block md:mr-auto">
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="flex gap-4">
        <button>
          <CartIcon />
        </button>
        <img src={AvatarImagen} alt="avatar" />
      </div>
    </header>
  );
};

export default MainHeader;
