import { FC, forwardRef } from "react";
import { createPortal } from "react-dom";
import Button from "../../UI/Button";
import Cart from "./Cart";
import { useHistory } from "react-router";
import { cartItemsState } from "../../store/features/cartSlice";
import { useAppSelector } from "../../hooks/hooks";

const cartModal = document.querySelector<Element>("#cart-modal");

interface MinicartProps {
  showMinicart: boolean;
  closeHandler: () => void;
  distributedRef?: any;
}

const Minicart: FC<MinicartProps> = forwardRef(
  ({ showMinicart, closeHandler, distributedRef }, ref) => {
    const cartItems = useAppSelector(cartItemsState);
    const history = useHistory();

    const finishOrderNavigationHandler = () => {
      if (cartItems.length === 0) {
        console.log("You need to add products to your cart to proceed!");
        return;
      }
      history.push("/finish-order");
      closeHandler();
    };

    return createPortal(
      <>
        {showMinicart && (
          <div className="z-50 bg-opacity-75 bg-card-dark inset-0 overflow-auto h-screen fixed flex">
            <main
              className="bg-alt-light dark:bg-card-dark shadow-defaultInner box-border rounded-lg flex items-center justify-center flex-col m-auto sm:w-96 transition-all ease-in-out duration-100 animate-fade"
              ref={distributedRef}
            >
              <Cart />
              <div className="flex items-center justify-center w-full sm:w-96 p-5">
                <Button
                  aria-label="close"
                  onClick={closeHandler}
                  extraClasses="flex-grow mr-2"
                >
                  Close
                </Button>
                <Button
                  aria-label="order"
                  extraClasses="flex-grow ml-2"
                  onClick={finishOrderNavigationHandler}
                  disabled={cartItems.length ? false : true}
                >
                  Order
                </Button>
              </div>
            </main>
          </div>
        )}
      </>,
      cartModal as Element
    );
  }
);

export default Minicart;
