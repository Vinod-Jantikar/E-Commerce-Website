import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import Products from "./components/products/Products";
import ProductDetail from "./components/productDetail/ProductDetail";
import Cart from "./components/cart/Cart";
import CartEmpty from "./components/cartEmpty/CartEmpty";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/empty" element={<CartEmpty/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
