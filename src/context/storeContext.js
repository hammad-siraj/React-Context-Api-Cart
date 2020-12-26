import React, { createContext } from "react";
import { DATA } from "../data";

export const StoreContext = createContext({
  items: DATA,
  cart: [],
  cartSum: 0,
  total: 0,
});
