import React, { useContext } from "react";
import Button from "../Components/Button";
import { StoreContext } from "../context/storeContext";
import "./items.css";

export default function Item(props) {
  const storecontext = useContext(StoreContext);
  return (
    <React.Fragment>
      <main className="products">
        <ul>
          {storecontext?.items.map((product) => (
            <li key={product?.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <Button onClick={() => storecontext.addToCart(product)}>
                  ADD TO CART
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
}
