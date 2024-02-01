import React, { useState } from "react";
import CarouselItem from "./CarouselItem/CarouselItem";

const Banner = () => {
  const [selected, setSelected] = useState(1);

  const carouselItems = [
    {
      image1:
        "https://www.bosley.com/wp-content/uploads/2021/12/header-image01-nick.jpg",
      image2:
        "https://www.bosley.com/wp-content/uploads/2021/12/nick-before-after.jpg",
      id: 1,
      prev: 4,
      next: 2,
    },
    {
      image1:
        "https://www.bosley.com/wp-content/uploads/2021/10/header-image02-edgar.jpg",
      image2:
        "https://www.bosley.com/wp-content/uploads/2021/11/Edgar-before-after.jpg",
      id: 2,
      prev: 1,
      next: 3,
    },
    {
      image1:
        "https://www.bosley.com/wp-content/uploads/2021/10/header-image03-troy.jpg",
      image2:
        "https://www.bosley.com/wp-content/uploads/2021/11/Troy-before-after_183.jpg",
      id: 3,
      prev: 2,
      next: 4,
    },
    {
      image1:
        "https://www.bosley.com/wp-content/uploads/2021/10/header-image04-kelly.jpg",
      image2:
        "https://www.bosley.com/wp-content/uploads/2021/10/kelly-before-after-1.jpg",
      id: 4,
      prev: 3,
      next: 1,
    },
  ];

  const total = carouselItems.length;

  return (
    <section className="bg-[#112341] px-5 md:px-8 flex py-10 md:py-24 xl:min-h-screen w-full">
      <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row lg:items-center md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl 2xl:max-w-[1350px] mx-auto">
        <div className="lg:basis-[40%] xl:basis-[45%] text-white flex flex-col gap-8 items-start md:px-0">
          <h1 className="text-5xl lg:text-[60px] xl:text-[80px] 2xl:text-[91px] font-semibold line lg:text-nowrap">
            America’s #1 <br /> Hair Restoration <br /> Experts
          </h1>
          <p className="text-[18px]">
            Join the millions of people who have come to Bosley to regain their
            confidence.
          </p>
          <button className="btn rounded-sm bg-[#DFEFFC]">
            Schedule a Free Consultation
          </button>
        </div>
        <div className="md:basis-[50%] lg:basis-[60%] xl:basis-[55%] relative">
          <div className="carousel w-full overflow-x-hidden">
            {carouselItems.map((carouselItem) => (
              <CarouselItem
                key={carouselItem.id}
                carouselItem={carouselItem}
                setSelected={setSelected}
              />
            ))}
          </div>

          <ul className="absolute md:right-[16%] xl:right-[14%] xl:bottom-[5%] flex justify-end gap-5">
            {[...Array(total).keys()].map((index) => (
              <li className="" key={index}>
                <button
                  className={`h-1 w-12 bg-white ${
                    index + 1 === selected ? "bg-[#F04923]" : "bg-[#4D5A71]"
                  }`}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
