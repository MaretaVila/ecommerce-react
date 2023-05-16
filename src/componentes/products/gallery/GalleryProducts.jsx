import SlideProducts from "@/componentes/products/gallery/SlideProducts";
import ModalProducts from "@/componentes/products/gallery/SlideProducts";

import { useState } from "react";

export default ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // Esto reemplaza un if(window.innerWidth > 767) return setIsOpenModal(true);
  const handleOpenModal = () => {
    window.innerWidth > 767 && setIsOpenModal(true);
  };

  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <SlideProducts
        ARRAY_IMGS={ARRAY_IMGS}
        ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
        className="grid md:grid-cols-4 md:gap-4"
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <>
          <ModalProducts
            ARRAY_IMGS={ARRAY_IMGS}
            ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
            isOpenModal={isOpenModal}
            className="hidden md:grid md:grid-cols-4 md:absolute md:gap-4 md:max-w-md md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:z-10"
            handleCloseModal={handleCloseModal}
          />
          <span className="fixed top-0 left-0 bg-black/70 w-full h-full"></span>
        </>
      )}
    </>
  );
};
