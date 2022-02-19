import { doc } from "@firebase/firestore";
import { FC, FormEvent, useEffect, useState } from "react";
import firestoreDb from "../../../../firebase";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import User from "../../../../models/User";
import { updateUser } from "../../../../store/features/auth/authReducers";
import {
  authLoadingStateSelector,
  currentUserSelector,
} from "../../../../store/features/auth/authSelectors";
import Button from "../../../../UI/Button";
import Input from "../../../../UI/Input";
import Loader from "../../../../UI/Loader";
import { errorToast, successToast } from "../../../../UI/Toasts";

const EditDetailsForm: FC = () => {
  const currentUser = useAppSelector(currentUserSelector);
  const loadingState = useAppSelector(authLoadingStateSelector);
  const dispatch = useAppDispatch();

  const [editedFirstName, setFirstName] = useState<string>("");
  const [editedLastName, setLastName] = useState<string>("");
  const [editedProfilePic, setProfilePic] = useState<string>("");
  const [editedPhoneNumber, setPhoneNumber] = useState<number>(0);

  const currentUserRef = doc(firestoreDb, "users", currentUser.id);

  const userInfo = () => {
    setFirstName(currentUser.firstName);
    setLastName(currentUser.lastName);
    setProfilePic(currentUser.profilePic);
    setPhoneNumber(currentUser.phoneNumber);
  };

  const editDetailsHandler = async (e: FormEvent) => {
    e.preventDefault();

    const updatedUserDetails: User = {
      ...currentUser,
      firstName: editedFirstName,
      lastName: editedLastName,
      profilePic: editedProfilePic,
      phoneNumber: editedPhoneNumber,
    };

    try {
      dispatch(updateUser({ updatedUserDetails, currentUserRef })).then(() =>
        window.location.reload()
      );
      successToast("Your account details have successfully been updated!");
    } catch (err) {
      console.log(`Error: ${err}`);
      errorToast("An error occured during details updating!");
    }
  };

  useEffect(() => {
    const unmount = userInfo();

    return () => unmount;
  }, []);

  return (
    <form>
      <Input
        type="text"
        hideLabel={false}
        label="First name"
        value={editedFirstName}
        autoFocus
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        type="text"
        hideLabel={false}
        label="Last name"
        value={editedLastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        type="url"
        hideLabel={false}
        label="Profile picture"
        value={editedProfilePic}
        onChange={(e) => setProfilePic(e.target.value)}
      />
      <Input
        type="number"
        hideLabel={false}
        label="Phone number"
        value={editedPhoneNumber}
        onChange={(e) => setPhoneNumber(+e.target.value)}
      />
      {loadingState ? (
        <Loader />
      ) : (
        <div className="mt-5 text-center">
          <Button onClick={editDetailsHandler}>Update</Button>
        </div>
      )}
    </form>
  );
};

export default EditDetailsForm;
