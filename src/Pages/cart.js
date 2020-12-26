import React, { useContext, useState, useEffect, useCallback } from "react";
import Button from "../Components/Button";
import { StoreContext } from "../context/storeContext";
import "./cart.css";

export default function Cart() {
  const storecontext = useContext(StoreContext);
  console.log("storecontext", storecontext);

  return (
    <React.Fragment>
      <main className="cart">
        {storecontext.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {storecontext.cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <Button
                  onClick={() => storecontext.removeFromCart(cartItem.id)}
                >
                  REMOVE FROM CART
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <h4>TOTAL:${storecontext.total}</h4>
      </main>
    </React.Fragment>
  );
}
