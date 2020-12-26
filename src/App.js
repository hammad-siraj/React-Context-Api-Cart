import React, { useState, useCallback } from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Item from "./Pages/item";
import Cart from "./Pages/cart";
import { StoreContext } from "./context/storeContext";
import { DATA } from "./data";

function App() {
  const [cart, setCart] = useState([]);
  const [total, settotal] = useState(0);
  const [items, setItems] = useState(DATA);
  let [cartSum, setcartSum] = useState(0);

  function addToCart(item) {
    let myCart = [...cart];
    let itemCopy = { ...item };
    setcartSum((sum) => sum + 1);

    const repeatItemIndex = myCart.findIndex((val) => val.id == item.id);
    if (repeatItemIndex >= 0) {
      myCart[repeatItemIndex].quantity += 1;
    } else {
      itemCopy.quantity += 1;
      myCart.push(itemCopy);
    }
    setCart(myCart);
    totalSum(myCart);
  }

  function removeFromCart(id) {
    setcartSum((prevSum) => prevSum - 1);
    let myCart = [...cart];
    let foundIndex = myCart.findIndex((val) => val.id === id);
    if (myCart[foundIndex].quantity > 1) {
      myCart[foundIndex].quantity -= 1;
    } else {
      myCart.splice(foundIndex, 1);
    }
    setCart(myCart);
    totalSum(myCart);
  }

  const totalSum = (cart) => {
    const total = cart.reduce((acc, ele) => {
      return ((acc + ele.price) * ele.quantity * 100) / 100;
    }, 0);
    settotal(total);
  };

  return (
    <StoreContext.Provider
      value={{ items, cart, addToCart, removeFromCart, total }}
    >
      <BrowserRouter>
        <Header cart={cart} sum={cartSum} />
        <Route path="/" component={Item} exact />
        <Route path="/cart" component={Cart} exact />
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
