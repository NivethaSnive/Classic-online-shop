import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (productToRemove) =>
    setCart(cart.filter((p) => p !== productToRemove));

  // ✅ Create routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar cartCount={cart.length} />
          <Home addToCart={addToCart} />
          <Footer />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <Navbar cartCount={cart.length} />
          <Products addToCart={addToCart} />
          <Footer />
        </>
      ),
    },
    {
      path: "/products/:id",
      element: (
        <>
          <Navbar cartCount={cart.length} />
          <ProductDetails addToCart={addToCart} />
          <Footer />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar cartCount={cart.length} />
          <Cart cart={cart} removeFromCart={removeFromCart} />
          <Footer />
        </>
      ),
    },
    {
      path: "/checkout",
      element: (
        <>
          <Navbar cartCount={cart.length} />
          <Checkout />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
