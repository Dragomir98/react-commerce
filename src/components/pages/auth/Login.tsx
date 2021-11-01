import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import { useAppDispatch } from "../../../hooks/hooks";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import GoogleLogin from "./GoogleLogin";
import { emailPasswordLogin } from "../../../store/features/auth/authReducers";
import OptionDelimeter from "../../../UI/OptionDelimeter";

const Register: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation<any>();

  const passwordIsInvalid = password.length < 8;

  const login = () => {
    try {
      if (!email || !password || !passwordIsInvalid) {
        dispatch(emailPasswordLogin({ email, password })).then(() => {
          history.replace(location.state?.from ?? "/");
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="flex flex-col justify-center h-full m-auto max-w-3/4 md:max-w-1/2">
      <h2 className="text-3xl font-semibold text-center">Sign in</h2>
      <form className="flex flex-col">
        <Input
          type="email"
          name="email"
          hideLabel={false}
          label="Email:"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          name="password"
          hideLabel={false}
          label="Password:"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="mt-5 text-center">
          <Button
            type="button"
            variant="primary"
            onClick={login}
            disabled={passwordIsInvalid ? true : false}
          >
            Login
          </Button>
        </div>
      </form>
      <OptionDelimeter />
      <GoogleLogin />
      <span className="text-center mt-4">
        Haven't signed up with us yet?{" "}
        <Link
          to="/register"
          className="text-blue-600 dark:text-blue-300 hover:text-secondary-light dark:hover:text-secondary-dark"
        >
          Click here to register
        </Link>
      </span>
      <span className="text-center mt-4">
        <Link
          to="/forgot-password"
          className="text-blue-600 dark:text-blue-300 hover:text-secondary-light dark:hover:text-secondary-dark"
        >
          Forgotten password?
        </Link>
      </span>
    </section>
  );
};

export default Register;
