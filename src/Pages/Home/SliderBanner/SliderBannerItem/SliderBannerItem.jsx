import React from "react";

const SliderBannerItem = ({ carouselItem }) => {
  const { id, prev, next, image, title, description } = carouselItem;
  return (
    <div id={`banner${id}`} className="carousel-item relative w-full pt-20">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-6 px-5 md:px-20 lg:gap-28 lg:px-28">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-5xl font-semibold">{title}</h2>
          <p>{description}</p>
          <button className="btn bg-[#1b3663] hover:bg-[#112341] text-white gap-5 rounded-sm">
          Find out more <span>❯</span>
        </button>
        </div>
        <div className="min-w-[40%] grow">
          <img className="w-full" src={image} alt="" />
        </div>
      </div>
      <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#banner${prev}`} className="text-5xl text-gray-600">
          ❮
        </a>
        <a href={`#banner${next}`} className="text-5xl text-gray-600 hover:bg-none">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SliderBannerItem;
