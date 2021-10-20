import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/hooks";
import useDetectClickOut from "../../../../hooks/useDetectClickOut";
import { UserIcon } from "../../../../UI/Icons";
import { useHistory } from "react-router";
import { authStateSelector } from "../../../../store/features/auth/authSelectors";
import { logoutUser } from "../../../../store/features/auth/authReducers";

const AuthMenu = () => {
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
      <span
        className="cursor-pointer p-2 rounded-lg bg-secondary-default transition ease-in-out duration-150 hover:bg-hover-link"
        ref={triggerRef}
      >
        <UserIcon />
      </span>
      {show && (
        <ul
          ref={nodeRef}
          className="absolute top-10 right-0 z-10 bg-primary-default rounded-md py-2 px-4 shadow-defaultOuter"
        >
          {isAuth && (
            <>
              <li className="text-center">
                <Link
                  to="/account"
                  className="text-xl w-full hover:text-secondary-default"
                >
                  Account
                </Link>
              </li>
              <li className="text-center">
                <span
                  className="cursor-pointer text-xl w-full hover:text-secondary-default"
                  onClick={logoutHandler}
                >
                  Logout
                </span>
              </li>
            </>
          )}
          {!isAuth && (
            <>
              <li className="flex text-center">
                <Link
                  to="/login"
                  className="text-xl w-full hover:text-secondary-default"
                >
                  Login
                </Link>
              </li>
              <li className="flex text-center">
                <Link
                  to="/register"
                  className="text-xl w-full hover:text-secondary-default"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default AuthMenu;
