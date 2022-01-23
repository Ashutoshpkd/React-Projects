import { useContext } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <div>
      {ctx.isOpen && (<Cart />)}
      <Header title='Ashutosh Meals' />
      <Meals />
    </div>
  );
}

export default App;
