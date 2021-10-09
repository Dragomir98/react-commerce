import Product from "../../models/Product";
import SingleProduct from "./SingleProduct";

const DUMMY_PRODUCTS: Product[] = [
  {
    id: "p1",
    image:
      "https://www.ikea.com/kr/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s",
    title: "Chair",
    price: 5.5,
    quantity: 1,
    totalPrice: 5.5,
    isAvailable: true,
  },
  {
    id: "p2",
    image:
      "https://www.ikea.com/us/en/images/products/moerbylanga-table-oak-veneer-brown-stained__0737108_pe740890_s5.jpg",
    title: "Table",
    price: 12.5,
    quantity: 1,
    totalPrice: 12.5,
    isAvailable: true,
  },
];

const Products: React.FC = () => {
  return (
    <ul className="m-auto w-full flex justify-center flex-row flex-wrap container">
      {DUMMY_PRODUCTS.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default Products;
