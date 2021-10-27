import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import { currentUserSelector } from "../../../store/features/auth/authSelectors";
import Button from "../../../UI/Button";
import HomeBlockItem from "./HomeBlockItem";

const HomePage = () => {
  const currentUser = useAppSelector(currentUserSelector);

  return (
    <>
      {currentUser && (
        <section className="my-10">
          <HomeBlockItem>
            <p className="text-2xl text-alt-light">
              Start planning your next move!
            </p>
            <hr className="my-3" />
            <div className="flex flex-col sm:flex-row justify-center border-alt-light">
              <Button>
                <Link to="/add-product">Add a product</Link>
              </Button>
              <Button extraClasses="ml-0 sm:ml-2">
                <Link to="/shop">Choose a product to make changes</Link>
              </Button>
            </div>
          </HomeBlockItem>
        </section>
      )}
      {!currentUser && (
        <p className="text-center text-2xl font-semibold mt-10">
          You aren't logged in yet!
        </p>
      )}
    </>
  );
};

export default HomePage;
