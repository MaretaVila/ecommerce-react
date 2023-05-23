import IndexHeader from "@/componentes/header/IndexHeader";
import IndexProducts from "@/componentes/products/IndexProducts";

import CartDetailsProvider from "@/context/useCartDetails";

const App = () => {
  return (
    <CartDetailsProvider>
      <>
        <IndexHeader />
        <IndexProducts />
      </>
    </CartDetailsProvider>
  );
};

export default App;
