import { useAppSelector } from "../../../hooks/hooks";
import {
  wishlistItemsState,
  wishlistQuantityState,
} from "../../../store/features/wishlistSlice";
import WishlistItem from "./WishlistItem";

const wishlistPage = () => {
  const wishlistItems = useAppSelector(wishlistItemsState);
  const wishlistQuantity = useAppSelector(wishlistQuantityState);

  return (
    <section className="m-auto sm:max-w-3/4">
      <h1 className="text-3xl text-center font-semibold py-10">Wishlist</h1>
      <div className="container grid grid-cols-1 px-3 gap-x-6 gap-y-4 md:grid-cols-2 lg:px-0">
        {wishlistQuantity > 0 &&
          wishlistItems.map((item) => (
            <WishlistItem product={item} key={item.id} />
          ))}
      </div>

      {wishlistQuantity === 0 && (
        <p className="text-2xl font-semibold text-center">
          You have no saved items yet!
        </p>
      )}
    </section>
  );
};

export default wishlistPage;
