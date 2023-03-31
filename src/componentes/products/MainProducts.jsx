import DetailsProducts from "@/componentes/products/DetailsProducts";
import SlideProducts from "@/componentes/products/SlideProducts";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <SlideProducts />
      <DetailsProducts />
    </main>
  );
};

export default MainProduct;
