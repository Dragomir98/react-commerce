import { useHistory } from "react-router";
import { useAppDispatch } from "../../../hooks/hooks";
import { googleLogin } from "../../../store/features/auth/authReducers";
import { GoogleIcon } from "../../../UI/Icons";

const GoogleLogin = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const googleLoginHandler = () => {
    dispatch(googleLogin());
    history.replace("/");
  };

  return (
    <div
      className="p-2 flex items-center justify-center rounded-md shadow-inner bg-alt-light dark:bg-alt-dark transition-all ease-in-out duration-75 cursor-pointer hover:bg-secondary-light hover:text-alt-light dark:hover:bg-secondary-dark dark:hover:text-alt-dark"
      onClick={googleLoginHandler}
    >
      <span className="text-secondary-default">
        <GoogleIcon />
      </span>
      <span className="text-xl pl-4 sm:text-2xl">Login with Google</span>
    </div>
  );
};

export default GoogleLogin;
