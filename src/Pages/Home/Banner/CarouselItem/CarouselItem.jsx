import React from "react";

const CarouselItem = ({ carouselItem, setSelected }) => {
  return (
    <div
      id={`slide${carouselItem.id}`}
      className="carousel-item relative w-full pb-16 md:pb-28 overflow-hidden"
    >
      <img
        className="w-full md:w-[70%] lg:w-[75%] 2xl:w-auto"
        src={carouselItem.image1}
      />
      <div className="absolute left-[2%] top-[50%] md:left-[45%] md:bottom-0 md:top-auto lg:md:left-[35%] lg:bottom-[2%] xl:left-[45%] xl:bottom-[10%]">
        <img src={carouselItem.image2} alt="" />
      </div>
      <img
        className="w-20 top-[20%] absolute right-2"
        src="https://www.bosley.com/wp-content/uploads/2021/08/hair-restorations.svg"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 right-2 top-2/4 gap-5">
        <a
          onClick={() => setSelected(carouselItem.prev)}
          href={`#slide${carouselItem.prev}`}
          className="btn flex px-3 rounded-sm"
        >
          ❮
        </a>
        <a
          onClick={() => setSelected(carouselItem.next)}
          href={`#slide${carouselItem.next}`}
          className="btn flex px-3 rounded-sm"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
