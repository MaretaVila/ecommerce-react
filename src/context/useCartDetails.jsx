import { createContext, useState } from "react";

export const useCartDetails = createContext();

export default (props) => {
  const [test, setTest] = useState("test");

  return (
    <useCartDetails.Provider value={{ test, setTest }}>
      {props.children}
    </useCartDetails.Provider>
  );
};
