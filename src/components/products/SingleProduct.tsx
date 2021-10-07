import Product from "../../models/Product";
import ProductForm from "./ProductForm";

const SingleProduct: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <li className="p-5 m-2 rounded-lg bg-alt-default">
      <img
        src={product.image}
        alt={product.title}
        className="max-h-52 rounded-md"
      />
      <p>{product.title}</p>
      <div>Price: {product.price.toFixed(2)}$</div>
      <div
        className={`p-2 rounded-md text-alt-default ${
          product.isAvailable ? "bg-success" : "bg-error"
        }`}
      >
        {product.isAvailable ? "Available" : "Out of Stock"}
      </div>
      <ProductForm />
    </li>
  );
};

export default SingleProduct;
