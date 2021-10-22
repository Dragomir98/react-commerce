import { FC } from "react";
import CartCounter from "../../../components/minicart/CartCounter";
import { CartIcon, HomeIcon, ShopIcon, StarIcon } from "../../../UI/Icons";
import NavLinkItem from "../../../UI/NavLinkItem";
import AuthMenu from "./items/authMenu/AuthMenu";
import ThemeToggler from "./theme/ThemeToggler";

const DesktopNav: FC = () => {
  return (
    <nav className="p-5 bg-primary-default flex flex-col justify-between bg-primary-light dark:bg-primary-dark text-alt-light dark:text-alt-dark sm:flex-row">
      <div className="flex flex-row flex-grow">
        <NavLinkItem
          href="/"
          isExact={true}
          hasLabel={true}
          label="Home"
          extraClasses="max-w-1/4"
        >
          <HomeIcon />
        </NavLinkItem>
        <ThemeToggler />
      </div>
      <div className="flex flex-row justify-end">
        <NavLinkItem
          href="/shop"
          hasLabel={true}
          label="Shop"
          extraClasses="my-2 sm:my-0"
        >
          <ShopIcon />
        </NavLinkItem>
        <AuthMenu />
        <NavLinkItem href="/wishlist" extraClasses="mr-2">
          <StarIcon />
        </NavLinkItem>
        <NavLinkItem href="/cart" extraClasses="flex">
          <CartCounter />
          <CartIcon />
        </NavLinkItem>
      </div>
    </nav>
  );
};

export default DesktopNav;
