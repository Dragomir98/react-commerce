import { createUserWithEmailAndPassword } from "@firebase/auth";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import { useHistory } from "react-router";
import { useAppDispatch } from "../../../hooks/hooks";
import { registerUser } from "../../../store/features/auth/authReducers";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [registerConfirmPassword, setRegisterConfirmPassword] =
    useState<string>("");
  const history = useHistory();
  const dispatch = useAppDispatch();

  const passwordIsInvalid = password.length < 8;
  const confirmPasswordIsInvalid = registerConfirmPassword.length < 8;
  const passwordsDontMatch = password !== registerConfirmPassword;

  const register = async () => {
    try {
      if (
        !passwordIsInvalid ||
        (!confirmPasswordIsInvalid && !passwordsDontMatch)
      ) {
        dispatch(registerUser({ email, password }));
        history.replace("/login");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="flex flex-col justify-center h-full max-w-3/4 m-auto md:max-w-1/2">
      <h2 className="text-3xl font-semibold text-center">Sign up</h2>
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
        {passwordIsInvalid && <p>Password must be atleast 8 symbols long!</p>}
        <Input
          type="password"
          name="confirm_password"
          hideLabel={false}
          label="Confirm Password:"
          onChange={(e) => setRegisterConfirmPassword(e.target.value)}
          required
        />
        {confirmPasswordIsInvalid && (
          <p>Password must be atleast 8 symbols long!</p>
        )}
        {passwordsDontMatch && <p>Provided passwords dont match!</p>}
        <div className="mt-5 text-center">
          <Button type="button" variant="primary" onClick={register}>
            Register
          </Button>
        </div>
      </form>
      <span className="text-center mt-4">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 hover:text-secondary-default"
        >
          Click here to login
        </Link>
      </span>
    </section>
  );
};

export default Login;
