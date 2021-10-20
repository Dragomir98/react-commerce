import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useAppDispatch } from "../../../hooks/hooks";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import GoogleLogin from "./GoogleLogin";
import { emailPasswordLogin } from "../../../store/features/auth/authReducers";

const Register: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const history = useHistory();

  const passwordIsInvalid = password.length < 8;

  const login = () => {
    try {
      if (!email || !password || !passwordIsInvalid) {
        dispatch(emailPasswordLogin({ email, password }));
        history.replace("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="flex flex-col justify-center h-full max-w-3/4 m-auto md:max-w-1/2">
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
          <Button type="button" variant="primary" onClick={login}>
            Login
          </Button>
        </div>
      </form>
      <div className="flex flex-row items-center">
        <hr className="h-0.5 w-full bg-black" />
        <span className="my-4 px-2 font-semibold text-center">OR</span>
        <hr className="h-0.5 w-full bg-black" />
      </div>
      <GoogleLogin />
      <span className="text-center mt-4">
        Haven't signed up with us yet?{" "}
        <Link
          to="/register"
          className="text-blue-600 hover:text-secondary-default"
        >
          Click here to register
        </Link>
      </span>
    </section>
  );
};

export default Register;
