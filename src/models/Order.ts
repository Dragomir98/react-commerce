import Buyer from "./Buyer";
import Product from "./Product";

interface Order {
  buyerId?: number;
  buyer?: Buyer;
  purchasedItems?: Product[];
  paymentMethod?: string;
  status?: string;
}

export default Order;
