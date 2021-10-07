import Products from "../components/products/Products";
import Navbar from "./Navbar";

const Layout: React.FC = (props) => {
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
};

export default Layout;
