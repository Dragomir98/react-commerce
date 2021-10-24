import { FC } from "react";
import { CartIcon, HomeIcon, ShopIcon } from "../../../UI/Icons";
import AuthMenu from "./items/authMenu/AuthMenu";
import BurgerMenu from "./items/BurgerMenu";
import MobileNavIcon from "./items/MobileNavIcon";
import MobileNavItem from "./items/MobileNavItem";
import ThemeToggler from "./theme/ThemeToggler";

const MobileNav: FC = () => {
  return (
    <nav className="fixed z-50 w-full p-5 bg-primary-light dark:bg-primary-dark flex flex-row justify-between text-alt-light dark:text-alt-dark sm:flex-row">
      <div className="flex items-center">
        <BurgerMenu />
        <MobileNavItem
          href="/"
          isExact={true}
          variant="icon"
          extraClasses="ml-2"
        >
          <MobileNavIcon icon={<HomeIcon />} />
        </MobileNavItem>
        <ThemeToggler />
      </div>

      <div className="flex flex-row items-center">
        <MobileNavItem href="/shop" isExact={true} variant="icon">
          <MobileNavIcon icon={<ShopIcon />} />
        </MobileNavItem>
        <AuthMenu isMobile={true} />
        <MobileNavItem href="/cart" variant="icon">
          <MobileNavIcon icon={<CartIcon />} />
        </MobileNavItem>
      </div>
    </nav>
  );
};

export default MobileNav;
