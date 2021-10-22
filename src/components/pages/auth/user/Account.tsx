import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { logoutUser } from "../../../../store/features/auth/authReducers";
import { currentUserSelector } from "../../../../store/features/auth/authSelectors";
import Button from "../../../../UI/Button";
import Card from "../../../../UI/Card";

const Account = () => {
  const currentUser = useAppSelector(currentUserSelector);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    history.replace("/login");
  };

  return (
    <section className="m-auto h-full flex flex-col">
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between mb-5">
        <h2 className="text-3xl font-semibold">
          Welcome back,{" "}
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email.split("@")[0]}
          !
        </h2>
        <div>
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt="User Image"
              className="max-w-1/2"
            />
          ) : (
            <p>No profile picture set</p>
          )}
        </div>
      </div>

      <Card>
        <p className="text-2xl font-medium mb-5">Your details:</p>
        <ul>
          <li>
            <p className="font-normal">Email: {currentUser.email}</p>
          </li>
          <li>
            <p className="font-normal">
              Your email{" "}
              {currentUser.emailVerified ? (
                <span className="text-green-500 font-semibold">
                  is verified!
                </span>
              ) : (
                <span className="text-red-500 font-semibold">verified!</span>
              )}
            </p>
          </li>
          <li>
            <p className="font-normal">
              Phone number:{" "}
              {currentUser.phoneNumber ? currentUser.phoneNumber : "not set"}
            </p>
          </li>
        </ul>
      </Card>

      <div className="w-10 mt-5">
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
    </section>
  );
};

export default Account;
