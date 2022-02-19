import { collection, doc, setDoc } from "@firebase/firestore";
import { ChangeEvent, FC, FormEvent, useReducer, useState } from "react";
import { useHistory } from "react-router";
import firestoreDb from "../../../firebase";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import Buyer from "../../../models/Buyer";
import Order from "../../../models/Order";
import { currentUserSelector } from "../../../store/features/auth/authSelectors";
import { cartItemsState, clearCart } from "../../../store/features/cartSlice";
import Button from "../../../UI/Button";
import Loader from "../../../UI/Loader";
import { errorToast, successToast } from "../../../UI/Toasts";
import Cart from "../../minicart/Cart";
import DeliveryType from "./PaymentMethod";
import { BuyerPayload, buyerReducer } from "./reducer/buyerReducer";
import UserForm from "./UserForm";

const ordersCollection = doc(collection(firestoreDb, "orders"));

const FinishOrder: FC = () => {
  const currentUser = useAppSelector(currentUserSelector);
  const cartItems = useAppSelector(cartItemsState);
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [isSubmittingOrder, setIsSubmittingOrder] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const buyerInitialState: Buyer = {
    email: currentUser.email,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    phoneNumber: currentUser.phoneNumber,
    country: "",
    city: "",
    address: "",
    postCode: null,
  };

  //reducer logic
  const [buyerState, dispatchBuyerChange] = useReducer(
    buyerReducer,
    buyerInitialState
  );

  //reducer onChange handler
  const changeBuyerInfoHandler = ({ type, payload }: BuyerPayload) => {
    dispatchBuyerChange({
      type,
      payload,
    });
  };

  //handle payment method change
  const changePaymentMethodHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSelectedPayment(e.target.value);
  };

  //handle submit
  const orderSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    //validations
    if (cartItems.length === 0) {
      console.log("You don't have any products in your cart!");
      return;
    }

    if (selectedPayment === "" || !selectedPayment) {
      console.log("No valid payment method was selected!");
      return;
    }

    const orderDetails: Order = {
      buyerId: currentUser.id,
      buyer: buyerState,
      purchasedItems: cartItems,
      paymentMethod: selectedPayment,
      status: "pending",
    };

    try {
      setIsSubmittingOrder(true);
      await setDoc(ordersCollection, orderDetails).then(() => {
        console.log("success!");
        dispatch(clearCart());
        history.replace("/");
      });
      successToast("Your order has successfully been sent for confirmation!");
    } catch (err) {
      console.log(`Error: ${err}`);
      errorToast("An error occured while confirming your order!");
    }
    setIsSubmittingOrder(false);
  };

  return (
    <section className="h-full flex flex-col">
      <h1 className="text-center font-semibold text-3xl my-5 text-text-light dark:text-text-dark">
        Order completion
      </h1>
      <div className="flex justify-center items-center flex-col md:flex-row m-auto w-full md:w-auto">
        <UserForm
          className="flex-grow mb-10 lg:md-auto"
          buyerState={buyerState}
          onBuyerDispatch={changeBuyerInfoHandler}
        />
        <div className="p-5 bg-card-light dark:bg-card-dark md:ml-5">
          <Cart />
          <div className="mt-5">
            <DeliveryType
              selectedOption={selectedPayment}
              onSelectChange={changePaymentMethodHandler}
            />
          </div>
          <div className="text-center mt-5">
            {isSubmittingOrder ? (
              <Loader />
            ) : (
              <Button onClick={orderSubmitHandler}>Finish Order</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinishOrder;
