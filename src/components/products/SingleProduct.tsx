import { FC, useContext, useState } from "react";
import Product from "../../models/Product";
import CartContext from "../../store/cart-context";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ProductForm from "./ProductForm";

const SingleProduct: FC<{ product: Product }> = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);

  const increaseQuantityHandler = () => {
    if (quantity < 10) {
      setQuantity((prevQuantity) => +prevQuantity + 1);
    }
  };

  const decreaseQuantityHandler = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => +prevQuantity - 1);
    }
  };

  const addToCartHandler = (quantity: number) => {
    cartCtx.addToCart({
      id: product.id,
      price: product.price,
      title: product.title,
      image: product.image,
      totalPrice: product.totalPrice,
      isAvailable: product.isAvailable,
      quantity,
    });
  };

  return (
    <li className="m-2 max-w-1/2">
      <Card>
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-52 rounded-md w-full m-auto mb-4"
          />
          <div
            className={`absolute top-1 left-1 pointer-events-none p-1 rounded-md text-alt-default ${
              product.isAvailable ? "bg-success" : "bg-error"
            }`}
          >
            {product.isAvailable ? "Available" : "Out of Stock"}
          </div>
        </div>

        <p className="text-xl font-semibold">{product.title}</p>
        <div>Price: {product.price.toFixed(2)}$</div>

        <ProductForm
          quantity={quantity}
          onIncrease={increaseQuantityHandler}
          onDecrease={decreaseQuantityHandler}
          onAddtoCart={addToCartHandler}
        />
      </Card>
    </li>
  );
};

export default SingleProduct;
