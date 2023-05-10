import { useEffect, useRef, useState } from "react";
import NextIcon from "@/componentes/icons/NextIcon";
import PreviousIcon from "@/componentes/icons/PreviousIcon";
import CloseIcon from "@/componentes/icons/CloseIcon";

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

  //useEffect siempre esta pendiente de algo, en este caso de Open Modal
  // useEffect(() => {
  //   isOpenModal && btnSlider.current.classList.remove("md:hidden");
  // }, [isOpenModal]);

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
          <CloseIcon />
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
          className={`absolute top-1/2 left-0 px-4 flex w-full -translate-y-1/2 justify-between ${
            !isOpenModal && "md:hidden"
          }`}
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
      {/* con la i accedo al indice que tiene la imagen y lo modifico con setIndex */}
      {ARRAY_IMG_SMALL.map((smallImg, i) => (
        <div
          key={i}
          onClick={() => {
            setIndex(i);
          }}
          className="relative rounded-md overflow-hidden cursor-pointer"
        >
          <img
            src={smallImg}
            alt=""
            className="hidden md:block md:rounded-md"
            onClick={handleOpenModal}
          />
          <span
            className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
              i === index && "bg-[rgba(255,255,255,0.5)]"
            } `}
          ></span>
        </div>
      ))}
    </section>
  );
};
