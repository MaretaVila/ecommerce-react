import imgSmall from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/componentes/icons/DeleteIcon";

export default () => {
  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:right-0 md:left-full md:top-full md:max-w-md md:-translate-x-full">
      <div className="mx-4 rounded-md bg-white shadow-md">
        <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
        <hr />
        <div className="grid grid-cols-[1fr_4fr_1fr] items-center gap-4 px-6 py-8">
          <img className="rounded-md" src={imgSmall} alt="" />
          <div>
            <h6> Fall Limited Edition Sneakers</h6>
            <p>
              <span>$125.00 x 3</span>{" "}
              <span className="font-bold">$375.00</span>
            </p>
          </div>
          <button className="ml-auto">
            <DeleteIcon className="hover:fill-orange-primary" />
          </button>
        </div>
        <div className="px-6 pb-8">
          <button className="hover:bg-orange-700x w-full rounded-md bg-orange-primary py-4 text-white transition-all">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};
