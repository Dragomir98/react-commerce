import { confirmPasswordReset } from "@firebase/auth";
import { FC, FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../../../firebase";
import useQuery from "../../../hooks/useQuery";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";

const ResetPassword: FC = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const query = useQuery();
  const oobCode = query.get("oobCode") as string;
  const history = useHistory();

  const passwordIsInvalid = newPassword.length < 8;

  const resetPassword = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!passwordIsInvalid) {
        await confirmPasswordReset(auth, oobCode, newPassword).then((res) => {
          console.log(res);
          console.log("reset successful!");
          history.replace("/login");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col justify-center h-full m-auto max-w-3/4 md:max-w-1/2">
      <h2 className="text-3xl font-semibold text-center">Reset password</h2>
      <form>
        <Input
          type="password"
          name="password"
          hideLabel={false}
          label="New password:"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <div className="mt-5 text-center">
          <Button type="button" variant="primary" onClick={resetPassword}>
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ResetPassword;
