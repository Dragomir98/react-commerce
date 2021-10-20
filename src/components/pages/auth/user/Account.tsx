import { useAppSelector } from "../../../../hooks/hooks";
import { currentUserSelector } from "../../../../store/features/auth/authSelectors";

const Account = () => {
  const currentUser = useAppSelector(currentUserSelector);
  console.log(currentUser);

  return (
    <section className="m-auto flex flex-col items-center max-w-1/2">
      <h2>Welcome back, user!</h2>
      <img src={currentUser.photoURL} alt="User Image" className="max-w-1/2" />
      <p>Your details:</p>
      <ul>
        <li>
          <p>Email: {currentUser.email}</p>
        </li>
        <li>
          <p>
            Your email {currentUser.emailVerified ? "is" : "is not"} verified!
          </p>
        </li>
        <li>
          <p>
            Phone number:{" "}
            {currentUser.phoneNumber ? currentUser.phoneNumber : "not set"}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Account;
