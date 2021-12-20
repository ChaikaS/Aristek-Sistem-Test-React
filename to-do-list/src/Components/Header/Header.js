import "./header.scss";
import contentImageLogo from "../../image/logo.png";
import contentImageUser from "../../image/image-user.png";
import contentImageBurgerMenu from "../../image/image-burger-menu.png";

export default function Header() {
  const imageLogo = <img src={contentImageLogo} alt={"images logo"} />;
  const imageUser = <img src={contentImageUser} alt={"images user"} />;
  const imageBurgerMenu = <img src={contentImageBurgerMenu} alt={"images burger"} />;
  return (
    <header className="header__conteiner">
      <div className="header__logo">
        <div>{imageLogo}</div>
        <div>To-Do</div>
      </div>
      <div className="header__text">Tasks</div>
      <div className="header__user">
        <div className="header__user_name">Leanne Graham</div>
        <div className="header__user_image">{imageUser}</div>
        <div className="header__burger-menu">{imageBurgerMenu}</div>
      </div>
    </header>
  );
}
