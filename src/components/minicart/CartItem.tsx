import { FC } from "react";
import Product from "../../models/Product";
import Button from "../../UI/Button";
import { TrashIcon } from "../../UI/Icons";

type Props = {
  product: Product;
  onRemove: (id: string) => void;
};

const CartItem: FC<Props> = ({ product, onRemove }) => {
  return (
    <div className="flex justify-between my-2 items-center bg-purple-300 rounded-lg p-2">
      <img
        src={product.image}
        alt={product.title}
        className="max-w-1/4 rounded-lg"
      />
      <div className="flex flex-col px-2">
        <h2 className="font-semibold text-xl">{product.title}</h2>
        <div className="font-semibold">Price: {product.price.toFixed(2)}$</div>
        <div className="font-semibold">Added quantity: {product.quantity}</div>
      </div>
      <div className="flex">
        <Button variant="primary" onClick={() => onRemove(product.id)}>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
