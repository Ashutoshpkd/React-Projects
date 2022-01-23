import { useContext } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import AuthContext from "./store/auth-context";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <CartContextProvider>
      {ctx.isOpen && (<Cart />)}
      <Header title='Ashutosh Meals' />
      <Meals />
      </CartContextProvider>
  );
}

export default App;
