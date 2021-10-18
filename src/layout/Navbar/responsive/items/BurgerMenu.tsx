import { useState } from "react";
import {
  BurgerIcon,
  LogoutIcon,
  StarIcon,
  UserIcon,
} from "../../../../UI/Icons";
import MobileNavIcon from "./MobileNavIcon";
import MobileNavItem from "./MobileNavItem";

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const borderTop = "border-solid border-t-2 border-alt-default";

  return (
    <div className="relative">
      <div
        className="text-alt-default cursor-pointer rounded-full p-1 transition ease-in-out duration-100 hover:bg-secondary-default"
        onClick={menuOpenHandler}
      >
        <BurgerIcon />
      </div>
      {menuOpen && (
        <div
          className={`fixed inset-y-72 transition-all ease-in-out duration-75 left-0 z-10 h-screen w-screen bg-primary-default max-w animate-drop ${borderTop}`}
        >
          <ul className="h-full list-none flex flex-col items-center mt-20">
            <li className="w-32 animate-fade">
              <MobileNavItem
                href="/wishlist"
                extraClasses="flex flex-row items-center justify-between"
                variant="text"
              >
                <MobileNavIcon icon={<StarIcon />}>
                  <span>Wishlist</span>
                </MobileNavIcon>
              </MobileNavItem>
            </li>
            <li className="w-32 animate-fade">
              <MobileNavItem
                href="/account"
                extraClasses="flex flex-row items-center"
                variant="text"
              >
                <MobileNavIcon icon={<UserIcon />}>
                  <span>Account</span>
                </MobileNavIcon>
              </MobileNavItem>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
