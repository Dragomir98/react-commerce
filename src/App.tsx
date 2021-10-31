import { Route, Switch } from "react-router";
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import CartPage from "./components/pages/cart/Cart";
import HomePage from "./components/pages/home/Home";
import ShopPage from "./components/pages/shop/Shop";
import wishlistPage from "./components/pages/wishlist/Wishlist";
import Layout from "./layout/Layout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { observeCurrentUser } from "./store/features/auth/authSlice";
import firestoreDb, { auth } from "./firebase";
import Account from "./components/pages/auth/user/Account";
import { authStateSelector } from "./store/features/auth/authSelectors";
import { logoutUser } from "./store/features/auth/authReducers";
import ProtectedRoute from "./UI/ProtectedRoute";
import ForgotPassword from "./components/pages/auth/ForgotPassword";
import ResetPassword from "./components/pages/auth/ResetPassword";
import AddProductForm from "./components/pages/auth/user/admin/AddProductForm";
import EditProductForm from "./components/pages/auth/user/admin/EditProductForm";
import ProductDetails from "./components/products/product-item/ProductDetails";
import FinishOrder from "./components/pages/order/FinishOrder";
import { doc, getDoc } from "@firebase/firestore";

function App() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(authStateSelector);

  //observe auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && !isAuthenticated) {
        const usersCollectionRef = doc(firestoreDb, "users", user.uid);
        const currentUser = await getDoc(usersCollectionRef);
        dispatch(observeCurrentUser(currentUser.data()));
      } else if (!user && !isAuthenticated) {
        dispatch(logoutUser());
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/wishlist" component={wishlistPage} />
        <Route exact path="/cart" component={CartPage} />
        <ProtectedRoute exact path="/login" component={Login} />
        <ProtectedRoute exact path="/register" component={Register} />
        <ProtectedRoute
          exact
          path="/forgot-password"
          component={ForgotPassword}
        />
        <ProtectedRoute
          exact
          path="/reset-password"
          component={ResetPassword}
        />
        <ProtectedRoute exact path="/account" component={Account} />
        <ProtectedRoute exact path="/add-product" component={AddProductForm} />
        <ProtectedRoute
          exact
          path="/edit-product"
          component={EditProductForm}
        />
        <Route exact path="/finish-order" component={FinishOrder} />
      </Switch>
    </Layout>
  );
}

export default App;
