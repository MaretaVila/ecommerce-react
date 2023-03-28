import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImagen from "@/assets/images/image-avatar.png";
import MenuIcon from "@/componentes/icons/MenuIcon";
import CartIcon from "@/componentes/icons/CartIcon";

const MainHeader = () => {
  const handleOpenMenu = () => {
    console.log("click");
  };

  return (
    <header className="container mx-auto flex items-center gap-4 px-4 py-8 bg-gray-200">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      <img
        src={LogoSneakers}
        alt="Logo sneakers"
        className="mr-auto mb-1 h-5 md:mr-0"
      />
      <nav className="absolute bg-gray-400 flex flex-col md:mr-auto md:flex md:flex-row md:gap-8">
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
        <img src={AvatarImagen} alt="avatar" className="w-10" />
      </div>
    </header>
  );
};

export default MainHeader;
