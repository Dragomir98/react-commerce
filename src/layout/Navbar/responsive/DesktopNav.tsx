import { FC } from "react";
import CartCounter from "../../../components/minicart/CartCounter";
import {
  CartIcon,
  HomeIcon,
  ShopIcon,
  StarIcon,
  UserIcon,
} from "../../../UI/Icons";
import NavLinkItem from "../../../UI/NavLinkItem";

const DesktopNav: FC = () => {
  return (
    <nav className="p-5 bg-primary-default flex flex-col justify-between text-alt-default sm:flex-row">
      <NavLinkItem
        href="/"
        isExact={true}
        hasLabel={true}
        label="Home"
        extraClasses="max-w-1/4"
      >
        <HomeIcon />
      </NavLinkItem>
      <NavLinkItem
        href="/shop"
        hasLabel={true}
        label="Shop"
        extraClasses="max-w-1/4 my-2 sm:my-0"
      >
        <ShopIcon />
      </NavLinkItem>
      <div className="flex flex-row justify-end">
        <NavLinkItem href="/login">
          <UserIcon />
        </NavLinkItem>
        <NavLinkItem href="/wishlist" extraClasses="mx-2">
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
