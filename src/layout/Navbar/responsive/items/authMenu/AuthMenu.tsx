import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../../hooks/hooks";
import useDetectClickOut from "../../../../../hooks/useDetectClickOut";
import { UserIcon } from "../../../../../UI/Icons";
import { useHistory } from "react-router";
import { authStateSelector } from "../../../../../store/features/auth/authSelectors";
import { logoutUser } from "../../../../../store/features/auth/authReducers";
import { FC } from "react";
import MobileNavIcon from "../MobileNavIcon";
import AuthMenuItem from "./AuthMenuItem";

interface Props {
  isMobile?: boolean;
}

const AuthMenu: FC<Props> = ({ isMobile = false }) => {
  const { show, nodeRef, triggerRef } = useDetectClickOut(false);
  const isAuth = useSelector(authStateSelector);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(logoutUser());
    history.replace("/login");
  };

  return (
    <div className="relative flex mx-2">
      {isMobile ? (
        <span
          ref={triggerRef}
          className="p-1 rounded-full hover:bg-link-lightHover dark:hover:bg-secondary-dark"
        >
          <MobileNavIcon icon={<UserIcon />} />
        </span>
      ) : (
        <span
          className="cursor-pointer p-2 rounded-lg transition ease-in-out duration-150 text-text-light dark:text-alt-dark hover:bg-link-lightHover dark:hover:bg-link-darkHover"
          ref={triggerRef}
        >
          <UserIcon />
        </span>
      )}
      {show && (
        <ul
          ref={nodeRef}
          className="absolute top-10 right-0 z-10 bg-primary-light dark:bg-primary-dark rounded-md py-2 px-4 shadow-defaultOuter"
        >
          {isAuth && (
            <>
              <AuthMenuItem>
                <Link to="/account">Account</Link>
              </AuthMenuItem>
              <AuthMenuItem>
                <span onClick={logoutHandler}>Logout</span>
              </AuthMenuItem>
            </>
          )}
          {!isAuth && (
            <>
              <AuthMenuItem>
                <Link to="/login">Login</Link>
              </AuthMenuItem>
              <AuthMenuItem>
                <Link to="/register">Register</Link>
              </AuthMenuItem>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default AuthMenu;
