import { CartIcon, HomeIcon, ShopIcon, StarIcon } from "../UI/Icons";
import NavLinkItem from "../UI/NavLinkItem";

const Navbar: React.FC = () => {
  return (
    <nav className="p-5 bg-primary-default flex flex-row justify-between text-alt-default">
      <NavLinkItem href="/" isExact={true} hasLabel={true} label="Home">
        <HomeIcon />
      </NavLinkItem>
      <NavLinkItem href="/shop" hasLabel={true} label="Shop">
        <ShopIcon />
      </NavLinkItem>
      <div className="flex flex-row">
        <NavLinkItem href="/wishlist" extraClasses="mr-2">
          <StarIcon />
        </NavLinkItem>
        <NavLinkItem href="/cart">
          <CartIcon />
        </NavLinkItem>
      </div>
    </nav>
  );
};

export default Navbar;
