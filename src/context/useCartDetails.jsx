import { createContext, useState } from "react";

export const useCartDetails = createContext();

export default (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProducts = (product) => {
    if (cartProducts.length === 0) {
      return setCartProducts([...cartProducts, product]);
    }

    //Funcion para aumentar la cantidad del mismo producto, si coincide con el mismo item aumenta en uno sino retorna el mismo
    setCartProducts(
      cartProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity };
        } else {
          return item;
        }
      })
    );
  };

  const deleteProducts = (id) => {
    setCartProducts(cartProducts.filter((item) => item.id !== id));
  };

  const TotalQuantityProduct = cartProducts.reduce(
    (acc, current) => current.quantity + acc,
    0
  );

  return (
    <useCartDetails.Provider
      value={{
        cartProducts,
        addProducts,
        deleteProducts,
        TotalQuantityProduct,
      }}
    >
      {props.children}
    </useCartDetails.Provider>
  );
};
