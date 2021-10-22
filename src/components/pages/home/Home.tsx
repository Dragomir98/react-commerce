import { useAppSelector } from "../../../hooks/hooks";
import { currentUserSelector } from "../../../store/features/auth/authSelectors";

const HomePage = () => {
  const currentUser = useAppSelector(currentUserSelector);

  return (
    <>
      <h1 className="text-3xl text-center font-semibold py-10">Home</h1>
      {currentUser && (
        <h2 className="text-2xl font-semibold text-center">
          Welcome, {currentUser?.email?.split("@")[0]}!
        </h2>
      )}
      {!currentUser && (
        <p className="text-center text-2xl font-semibold">
          You aren't logged in yet!
        </p>
      )}
    </>
  );
};

export default HomePage;
