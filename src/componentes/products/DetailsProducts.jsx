import CartIcon from "@/componentes/icons/CartIcon.jsx";

export default () => {
  return (
    <section className="container mx-auto px-4">
      <p className="text-orange-primary uppercase text-sm font-bold mb-3 tracking-wide">
        Sneaker Company
      </p>
      <h2 className="font-bold mb-4 text-2xl">Fall Limited Edition Sneakers</h2>
      <p className="mb-5 text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="gap-4 grid grid-cols-3 items-center font-bold mb-5">
        <span className="text-2xl"> $125.00</span>
        <span className="bg-pale-orange rounded-md mr-auto py-1 px-2 text-orange-primary">
          {" "}
          50%
        </span>
        <span className="text-right text-grayish-blue text-lg line-through">
          $250.00
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 font-bold">
        <div className="col-span-3 bg-gray-200 flex items-baseline justify-between rounded-md py-2 px-5 pb-5">
          <button className="text-3xl text-orange-primary">-</button>
          <span className="text-xl">0</span>
          <button className="text-3xl text-orange-primary">+</button>
        </div>
        <button className="flex items-center justify-center gap-x-3 col-span-3 bg-orange-primary transition-all text-white py-3 rounded-md hover:bg-orange-800">
          <CartIcon className="fill-white" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};
