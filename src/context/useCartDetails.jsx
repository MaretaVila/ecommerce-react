import { createContext, useState } from "react";

export const useCartDetails = createContext();

export default (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProducts = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const deleteProducts = () => {};

  return (
    <useCartDetails.Provider
      value={{ cartProducts, addProducts, deleteProducts }}
    >
      {props.children}
    </useCartDetails.Provider>
  );
};
