import { useState } from "react"
import TotalPrice from "./components/TotalPrice/TotalPrice";
import './App.css'
import CartHeader from "./components/CartHeader/CartHeader";
import ConstantsData from "./Utils/Data";
import Cart from "./components/Cart/Cart";
import products from "./Utils/Data";
export default function App() { 
  const [listProducts, setListProducts] = useState(products);
  return (
    <div className="main">
      <div className="mainContainer">
        <CartHeader listProducts={listProducts} />
        <Cart dataList={listProducts}/>
      </div>
    </div>
  )
}