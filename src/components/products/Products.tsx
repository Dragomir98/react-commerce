import { FC } from "react";
import Product from "../../models/Product";
import ProductItem from "./ProductItem";

interface Props {
  products: Product[];
}

const Products: FC<Props> = ({ products }) => {
  return (
    <ul className="mt-2 md:mt-auto md:ml-3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default Products;
