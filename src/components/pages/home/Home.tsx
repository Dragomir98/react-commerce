import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import { currentUserSelector } from "../../../store/features/auth/authSelectors";
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
              <Link
                to="/add-product"
                className="text-center transition-all ease-in-out duration-100 bg-link-lightHover text-alt-light hover:text-text-light hover:bg-secondary-light p-2 rounded-md mb-3 sm:mb-0 sm:mr-3"
              >
                Add a product
              </Link>
              <Link
                to="/shop"
                className="text-center transition-all ease-in-out duration-100 bg-link-lightHover text-alt-light hover:text-text-light hover:bg-secondary-light p-2 rounded-md"
              >
                Choose a product to make changes
              </Link>
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
