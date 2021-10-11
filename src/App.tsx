import { Route, Switch } from "react-router";
import CartPage from "./components/pages/cart/Cart";
import HomePage from "./components/pages/home/Home";
import ShopPage from "./components/pages/shop/Shop";
import wishlistPage from "./components/pages/wishlist/Wishlist";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/wishlist" component={wishlistPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Layout>
  );
}

export default App;
