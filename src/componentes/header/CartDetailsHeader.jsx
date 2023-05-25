import { useContext } from "react";
import { useCartDetails } from "@/context/useCartDetails";

import DeleteIcon from "@/componentes/icons/DeleteIcon";

export default () => {
  const { cartProducts, deleteProducts } = useContext(useCartDetails);

  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:right-0 md:left-full md:top-full md:max-w-md md:-translate-x-full">
      <div className="mx-4 rounded-md bg-white shadow-md">
        <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
        <hr />
        {cartProducts.length === 0 && (
          <p className="py-8 text-center">Your cart is empty</p>
        )}
        {cartProducts.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-4 px-6 py-4"
          >
            <img className="rounded-md" src={product.img} alt="" />
            <div>
              <h6>{product.title}</h6>
              <p>
                <span>
                  ${product.discountPrice} x {product.quantity}
                </span>{" "}
                <span className="font-bold">
                  ${(product.discountPrice * product.quantity).toFixed(2)}
                </span>
              </p>
            </div>
            <button
              className="ml-auto"
              onClick={() => deleteProducts(product.id)}
            >
              <DeleteIcon className="hover:fill-orange-primary" />
            </button>
          </article>
        ))}

        {cartProducts.length !== 0 && (
          <div className="px-6 pb-8">
            <button className="hover:bg-orange-700x w-full rounded-md bg-orange-primary py-4 text-white transition-all">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
