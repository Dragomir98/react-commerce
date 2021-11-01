import { useState } from "react";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { logoutUser } from "../../../../store/features/auth/authReducers";
import {
  authLoadingStateSelector,
  currentUserSelector,
} from "../../../../store/features/auth/authSelectors";
import Button from "../../../../UI/Button";
import Card from "../../../../UI/Card";
import Loader from "../../../../UI/Loader";
import EditDetailsForm from "./EditDetailsForm";

const Account = () => {
  const currentUser = useAppSelector(currentUserSelector);
  const loadingState = useAppSelector(authLoadingStateSelector);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [editingDetails, setEditingDetails] = useState<boolean>(false);

  const toggleEditingFormHandler = () => {
    setEditingDetails((prevState) => !prevState);
  };

  const logoutHandler = () => {
    try {
      dispatch(logoutUser()).then(() => {
        history.replace("/login");
      });
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  return (
    <section className="m-auto h-full flex flex-col md:max-w-3/4 lg:max-w-1/2">
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between mt-10 mb-5">
        <h2 className="text-3xl font-semibold">
          Welcome back,{" "}
          {currentUser.firstName ?? currentUser.email.split("@")[0]}!
        </h2>
      </div>

      <Card>
        {loadingState ? (
          <Loader />
        ) : (
          <div className="flex flex-col sm:flex-col justify-between">
            <div className="flex justify-center">
              {currentUser.profilePic ? (
                <img
                  src={currentUser.profilePic}
                  alt="User Image"
                  className="max-w-1/2 rounded-full"
                />
              ) : (
                <p>No profile picture set</p>
              )}
            </div>
            <hr className="my-2 h-1 bg-text-light dark:bg-text-dark" />
            <div className="flex-grow flex flex-col">
              {!editingDetails && (
                <>
                  <p className="text-2xl font-medium mb-5">Your details:</p>
                  <ul>
                    <li>
                      <div className="flex flex-col sm:flex-row">
                        <div className="text-xl">
                          Email:{" "}
                          <span className="break-all">{currentUser.email}</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p className="font-normal text-xl">
                        Full name:{" "}
                        {currentUser.firstName
                          ? `${currentUser.firstName} ${currentUser.lastName}`
                          : "not set"}
                      </p>
                    </li>
                    <li>
                      <p className="font-normal text-xl">
                        Phone number:{" "}
                        {currentUser.phoneNumber
                          ? currentUser.phoneNumber
                          : "not set"}
                      </p>
                    </li>
                  </ul>
                </>
              )}
              <div
                className={`flex justify-between mt-auto ${
                  !editingDetails && "pt-5"
                }`}
              >
                <Button onClick={toggleEditingFormHandler}>
                  {editingDetails ? "Close" : "Edit details"}
                </Button>

                <Button onClick={logoutHandler}>Logout</Button>
              </div>
              {editingDetails && <EditDetailsForm />}
            </div>
          </div>
        )}
      </Card>
    </section>
  );
};

export default Account;
