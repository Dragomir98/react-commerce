import { FC, FormEvent } from "react";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import { useState } from "react";
import { sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../../../firebase";

const ForgotPassword: FC = () => {
  const [email, setEmail] = useState<string>("");

  const forgotPassword = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email, {
        url: "http://localhost:3000/home-commerce/#/login",
      }).then((res) => console.log("Password reset sent sucessfully!"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col justify-center h-full m-auto max-w-3/4 md:max-w-1/2">
      <h2 className="text-3xl font-semibold text-center">Forgotten password</h2>
      <form>
        <Input
          type="email"
          name="email"
          hideLabel={false}
          label="Email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="mt-5 text-center">
          <Button type="button" variant="primary" onClick={forgotPassword}>
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ForgotPassword;
