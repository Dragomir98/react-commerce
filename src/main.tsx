import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartProvider from "./store/CartProvider";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </HashRouter>,
  document.getElementById("root")
);
