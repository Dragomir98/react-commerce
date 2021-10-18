import { FC } from "react";
import { CartIcon, HomeIcon, UserIcon } from "../../../UI/Icons";
import BurgerMenu from "./items/BurgerMenu";
import MobileNavIcon from "./items/MobileNavIcon";
import MobileNavItem from "./items/MobileNavItem";

const MobileNav: FC = () => {
  return (
    <nav className="p-5 bg-primary-default flex flex-row justify-between text-alt-default sm:flex-row">
      <div className="flex items-center">
        <BurgerMenu />
      </div>
      <div className="flex flex-row items-center">
        <MobileNavItem href="/" isExact={true} variant="icon">
          <MobileNavIcon icon={<HomeIcon />} />
        </MobileNavItem>
        <MobileNavItem href="/account" variant="icon" extraClasses="mx-2">
          <MobileNavIcon icon={<UserIcon />} />
        </MobileNavItem>
        <MobileNavItem href="/cart" variant="icon">
          <MobileNavIcon icon={<CartIcon />} />
        </MobileNavItem>
      </div>
    </nav>
  );
};

export default MobileNav;
