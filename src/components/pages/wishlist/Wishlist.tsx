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
    <>
      <h1 className="text-3xl text-center font-semibold py-10">Wishlist</h1>
      <div className="grid grid-cols-1 px-3 gap-x-6 gap-y-4 md:grid-cols-2 lg:px-0">
        {wishlistQuantity > 0 &&
          wishlistItems.map((item) => (
            <WishlistItem product={item} key={item.id} />
          ))}
      </div>

      {wishlistQuantity === 0 && <p>You have no saved items yet!</p>}
    </>
  );
};

export default wishlistPage;
