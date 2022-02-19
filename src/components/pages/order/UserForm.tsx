import { FC, HTMLProps } from "react";
import { useSelector } from "react-redux";
import Buyer from "../../../models/Buyer";
import { currentUserSelector } from "../../../store/features/auth/authSelectors";
import Input from "../../../UI/Input";
import BuyerActions from "./reducer/buyerActions";
import { BuyerPayload } from "./reducer/buyerReducer";

interface Props extends HTMLProps<HTMLFormElement> {
  buyerState: Buyer;
  onBuyerDispatch: ({ type, payload }: BuyerPayload) => void;
}

const UserForm: FC<Props> = ({ buyerState, onBuyerDispatch, ...rest }) => {
  const currentUser = useSelector(currentUserSelector);

  return (
    <form {...rest}>
      <div className="flex md:justify-between md:flex-row">
        <Input
          label="First name"
          type="text"
          containerClasses="mr-2"
          defaultValue={currentUser?.firstName}
          required
          onChange={(e) =>
            onBuyerDispatch({
              type: BuyerActions.SET_BUYER_FIRSTNAME,
              payload: {
                ...buyerState,
                firstName: e.target.value,
              },
            })
          }
        />
        <Input
          label="Last name"
          type="text"
          containerClasses="ml-2"
          defaultValue={currentUser?.lastName}
          required
          onChange={(e) =>
            onBuyerDispatch({
              type: BuyerActions.SET_BUYER_LASTNAME,
              payload: {
                ...buyerState,
                lastName: e.target.value,
              },
            })
          }
        />
      </div>
      <div className="flex md:justify-between md:flex-row">
        <Input
          label="Email"
          type="email"
          containerClasses="mr-2"
          defaultValue={currentUser?.email}
          required
          onChange={(e) =>
            onBuyerDispatch({
              type: BuyerActions.SET_BUYER_EMAIL,
              payload: {
                ...buyerState,
                email: e.target.value,
              },
            })
          }
        />
        <Input
          label="Phone Number"
          type="tel"
          containerClasses="ml-2"
          max={999999999}
          defaultValue={currentUser?.phoneNumber}
          required
          onChange={(e) =>
            onBuyerDispatch({
              type: BuyerActions.SET_BUYER_PHONENUMBER,
              payload: {
                ...buyerState,
                phoneNumber: +e.target.value,
              },
            })
          }
        />
      </div>
      <Input
        label="Country"
        type="text"
        required
        onChange={(e) =>
          onBuyerDispatch({
            type: BuyerActions.SET_BUYER_COUNTRY,
            payload: { ...buyerState, country: e.target.value },
          })
        }
      />
      <div className="flex md:justify-between md:flex-row">
        <Input
          label="City"
          type="text"
          containerClasses="mr-2"
          required
          onChange={(e) =>
            onBuyerDispatch({
              type: BuyerActions.SET_BUYER_CITY,
              payload: { ...buyerState, city: e.target.value },
            })
          }
        />
        <Input
          label="Post Code"
          type="number"
          containerClasses="ml-2"
          max={9999}
          required
          onChange={(e) =>
            onBuyerDispatch({
              type: BuyerActions.SET_BUYER_POSTCODE,
              payload: { ...buyerState, postCode: +e.target.value },
            })
          }
        />
      </div>
      <Input
        label="Address"
        type="text"
        required
        onChange={(e) =>
          onBuyerDispatch({
            type: BuyerActions.SET_BUYER_ADDRESS,
            payload: { ...buyerState, address: e.target.value },
          })
        }
      />
    </form>
  );
};

export default UserForm;
