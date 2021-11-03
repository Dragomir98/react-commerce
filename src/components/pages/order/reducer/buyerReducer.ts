import Buyer from "../../../../models/Buyer";
import BuyerActions from "./buyerActions";

export interface BuyerPayload {
  type?: string;
  payload?: Buyer;
}

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const buyerReducer = (state: Buyer, action: BuyerPayload) => {
  const { type, payload } = action;
  switch (type) {
    case BuyerActions.SET_BUYER_EMAIL:
      return {
        ...state,
        email: payload?.email,
      };
    case BuyerActions.SET_BUYER_FIRSTNAME:
      return {
        ...state,
        firstName: payload?.firstName,
      };
    case BuyerActions.SET_BUYER_LASTNAME:
      return {
        ...state,
        lastName: payload?.lastName,
      };
    case BuyerActions.SET_BUYER_COUNTRY:
      return {
        ...state,
        country: payload?.country,
      };
    case BuyerActions.SET_BUYER_CITY:
      return {
        ...state,
        city: payload?.city,
      };
    case BuyerActions.SET_BUYER_ADDRESS:
      return {
        ...state,
        address: payload?.address,
      };
    case BuyerActions.SET_BUYER_POSTCODE:
      return {
        ...state,
        postCode: payload?.postCode,
      };
    case BuyerActions.SET_BUYER_PHONENUMBER:
      return {
        ...state,
        phoneNumber: payload?.phoneNumber,
      };
    default:
      return state;
  }
};
