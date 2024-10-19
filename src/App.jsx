import React, { createContext, useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Erorpage from "./pages/Erorpage";
import Cart from "./pages/Cart";
import Header from "./Layouts/Header";

export const CardContex = createContext();
export const ThemeContex = createContext();

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [card, setCard] = useState([]);
  const [theme, setTheme] = useState("light");

  let params = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    } else {
      if (
        !(
          location.pathname == "/" ||
          location.pathname.includes("register") ||
          location.pathname.includes("about") ||
          location.pathname.includes("products") ||
          location.pathname.includes("cart")
        )
      ) {
        navigate("login");
      }
    }
  }, [navigate]);

  function PrivateRoute({ isAuth, children }) {
    if (!isAuth) {
      navigate("login");
    }
    return children;
  }
  return (
    <ThemeContex.Provider value={{ theme, setTheme }}>
      <CardContex.Provider value={{ card, setCard }}>
        <Routes>
          <Route
            path="/"
            element={
              <Header>
                <Home></Home>
              </Header>
            }
          ></Route>
          
          <Route
            path="/products/:id"
            element={
              <Header>
                <Details></Details>
              </Header>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/about"
            element={
              <Header>
                <About></About>
              </Header>
            }
          ></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          <Route
            path="/cart"
            element={
              <Header>
                <Cart></Cart>
              </Header>
            }
          ></Route>
         
{/* Provite pages */}
          <Route
            path="/orders"
            element={
              <PrivateRoute isAuth={!!token}>
                <Header>
                  <Orders></Orders>
                </Header>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <PrivateRoute isAuth={!!token}>
                <Header>
                  <Checkout></Checkout>
                </Header>
              </PrivateRoute>
            }
          ></Route>

          {/* erorpage */}
           <Route
            path="*"
            element={
              <Header>
                <Erorpage></Erorpage>
              </Header>
            }
          ></Route>
        </Routes>
      </CardContex.Provider>
    </ThemeContex.Provider>
  );
}

export default App;
