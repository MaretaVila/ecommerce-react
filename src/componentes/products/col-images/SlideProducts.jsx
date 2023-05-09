import { useRef, useState } from "react";
import NextIcon from "@/componentes/icons/NextIcon";
import PreviousIcon from "@/componentes/icons/PreviousIcon";

export default ({
  ARRAY_IMGS = [],
  ARRAY_IMG_SMALL = [],
  isOpenModal = false,
  handleCloseModal = null,
  handleOpenModal = () => {},
  ...props
}) => {
  const btnSlider = useRef(null);
  const [index, setIndex] = useState(0);

  //reemplazo el if, utilizo un operador ternario para el return (?) y saco el ; y lo reemplazo por :
  const handleClickNext = () => {
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
  };

  return (
    <section {...props}>
      {isOpenModal && (
        <button onClick={handleCloseModal} className="md:col-span-4 text-right">
          cerrar
        </button>
      )}
      <div className="col-span-4 relative">
        <img
          src={ARRAY_IMGS[index]}
          alt=""
          className="aspect-[16/14] w-full md:rounded-md md:cursor-pointer"
          onClick={handleOpenModal}
        />
        <div
          ref={btnSlider}
          className="absolute top-1/2 left-0 px-4 flex w-full -translate-y-1/2 justify-between"
        >
          <button
            className="w-10 h-10 rounded-full bg-white grid place-items-center"
            onClick={handleClickPrev}
          >
            <PreviousIcon />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-white grid place-items-center"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {ARRAY_IMG_SMALL.map((smallImg) => (
        <img
          key={smallImg}
          src={smallImg}
          alt=""
          className="hidden md:block md:rounded-md"
          onClick={handleOpenModal}
        />
      ))}
    </section>
  );
};
