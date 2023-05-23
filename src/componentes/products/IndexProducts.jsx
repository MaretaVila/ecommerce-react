import DetailsProducts from "@/componentes/products/details/DetailsProducts";
import GalleryProducts from "@/componentes/products/gallery/GalleryProducts";

import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

//AQUI VENDRIA EL FETCH, NO SERÍA DE FORMA MANUAL SINO DINAMICA CONSUMIENDO UNA API externa, ESTAS IMAGENES NO DEBERIAN EXISTIR.

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

const ARRAY_IMG_SMALL = [
  imgProductSmall1,
  imgProductSmall2,
  imgProductSmall3,
  imgProductSmall4,
];

//este objeto simula lo que onsumiriamos de una API
const objectProduct = {
  id: 1,
  title: "Fall Limited Edition Sneaker",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  subtitle: "SNEAKER COMPANY",
  price: 250,
  discount: 0.4,
  imagesMain: ARRAY_IMGS,
  imagesSmall: ARRAY_IMG_SMALL,
};

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
      <GalleryProducts
        ARRAY_IMGS={objectProduct.imagesMain}
        ARRAY_IMG_SMALL={objectProduct.imagesSmall}
      />
      <DetailsProducts objectProduct={objectProduct} />
    </main>
  );
};

export default MainProduct;
