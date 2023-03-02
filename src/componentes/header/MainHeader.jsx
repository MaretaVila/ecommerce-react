import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImagen from "@/assets/images/image-avatar.png";
import MenuIcon from "@/componentes/icons/MenuIcon.jsx";

const MainHeader = () => {
  return (
    <header>
      <button>
        <MenuIcon />
      </button>
      <img src={LogoSneakers} alt="Logo" />
      <nav>
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div>
        <button>cart</button>
        <img src={AvatarImagen} alt="avatar" />
      </div>
    </header>
  );
};

export default MainHeader;
