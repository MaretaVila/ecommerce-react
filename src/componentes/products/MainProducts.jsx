import DetailsProducts from "@/componentes/products/col-details/DetailsProducts";
import SlideProducts from "@/componentes/products/col-images/SlideProducts";

import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";
import MainImages from "./col-images/MainImages";

//AQUI VENDRIA EL FETCH, NO SERÍA DE FORMA MANUAL SINO DINAMICA CONSUMIENDO UNA API, ESTAS IMAGENES NO DEBERIAN EXISTIR.

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

const ARRAY_IMG_SMALL = [
  imgProductSmall1,
  imgProductSmall2,
  imgProductSmall3,
  imgProductSmall4,
];

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 gap-8 items-center md:container md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2 md:mx-auto">
      <MainImages ARRAY_IMGS={ARRAY_IMGS} ARRAY_IMG_SMALL={ARRAY_IMG_SMALL} />
      <DetailsProducts />
    </main>
  );
};

export default MainProduct;
