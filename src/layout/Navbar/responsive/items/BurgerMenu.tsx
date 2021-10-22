import { useState } from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import { authStateSelector } from "../../../../store/features/auth/authSelectors";
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
  const isAuthenticated = useAppSelector(authStateSelector);

  const menuOpenHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const borderTop =
    "border-solid border-t-2 border-alt-light dark:border-alt-dark";

  return (
    <div className="relative">
      <div
        className="text-alt-light dark:text-alt-dark cursor-pointer rounded-full p-1 transition ease-in-out duration-100 hover:bg-link-lightHover dark:hover:bg-secondary-dark"
        onClick={menuOpenHandler}
      >
        <BurgerIcon />
      </div>
      {menuOpen && (
        <div
          className={`fixed inset-y-72 transition-all ease-in-out duration-75 left-0 z-10 h-screen w-screen bg-primary-light dark:bg-primary-dark max-w animate-drop ${borderTop}`}
        >
          <ul className="h-full list-none flex flex-col items-center mt-20">
            {isAuthenticated && (
              <>
                <li className="w-32 animate-fade">
                  <MobileNavItem
                    href="/wishlist"
                    extraClasses="flex flex-row items-center justify-between"
                    variant="text"
                  >
                    <MobileNavIcon icon={<StarIcon />}>
                      <span className="flex-grow text-center">Wishlist</span>
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
                      <span className="flex-grow text-center">Account</span>
                    </MobileNavIcon>
                  </MobileNavItem>
                </li>
              </>
            )}

            {!isAuthenticated && (
              <>
                <li className="w-32 animate-fade">
                  <MobileNavItem
                    href="/login"
                    extraClasses="flex flex-row items-center justify-between"
                    variant="text"
                  >
                    <MobileNavIcon icon={<StarIcon />}>
                      <span className="flex-grow text-center">Login</span>
                    </MobileNavIcon>
                  </MobileNavItem>
                </li>
                <li className="w-32 animate-fade">
                  <MobileNavItem
                    href="/register"
                    extraClasses="flex flex-row items-center"
                    variant="text"
                  >
                    <MobileNavIcon icon={<UserIcon />}>
                      <span className="flex-grow text-center">Register</span>
                    </MobileNavIcon>
                  </MobileNavItem>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
