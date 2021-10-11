import Product from "./Product";

type ContextType = {
  items: Product[];
  quantity: number;
  totalPrice: number;
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export default ContextType;
