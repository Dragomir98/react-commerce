import { FC } from "react";
import CartCounter from "../../../components/minicart/CartCounter";
import MinicartToggler from "../../../components/minicart/MinicartToggler";
import { CartIcon, HomeIcon, ShopIcon } from "../../../UI/Icons";
import AuthMenu from "./items/authMenu/AuthMenu";
import BurgerMenu from "./items/BurgerMenu";
import MobileNavIcon from "./items/MobileNavIcon";
import MobileNavItem from "./items/MobileNavItem";
import ThemeToggler from "./theme/ThemeToggler";

const MobileNav: FC = () => {
  return (
    <nav className="fixed z-20 w-full p-5 bg-primary-light dark:bg-primary-dark flex flex-row justify-between text-alt-light dark:text-alt-dark sm:flex-row">
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

        <MinicartToggler />
      </div>
    </nav>
  );
};

export default MobileNav;
