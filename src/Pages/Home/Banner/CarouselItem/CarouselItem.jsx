
const CarouselItem = ({ carouselItem, setSelected }) => {
  const { id, image1, image2, prev, next, person } = carouselItem;

  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full pb-52 md:pb-28 overflow-hidden"
    >
      <div>
        <img className="w-full md:w-[80%] lg:w-[75%] 2xl:w-auto" src={image1} />
        <div className="absolute left-[2%] bottom-[48%] md:bottom-[25%] 2xl:bottom-[20%] text-white w-[130px] py-3 px-4 rounded-lg">
          <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70 z-0 rounded-lg"></div>
          <h6 className="relative z-10 text-xs font-semibold">{person}</h6>
          <small className="relative z-10 leading-none block text-[9px]">Actual Bosley Patient Individual results mary vary.</small>
        </div>
      </div>
      <div className="absolute left-[2%] top-[55%] md:left-[45%] md:bottom-0 md:top-auto lg:md:left-[35%] lg:bottom-[2%] xl:left-[45%] xl:bottom-[10%]">
        <img src={image2} alt="" />
      </div>
      <img
        className="w-20 top-[20%] absolute right-2"
        src="https://www.bosley.com/wp-content/uploads/2021/08/hair-restorations.svg"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 right-2 top-2/4 gap-5">
        <a
          onClick={() => setSelected(prev)}
          href={`#slide${prev}`}
          className="btn flex px-3 rounded-sm"
        >
          ❮
        </a>
        <a
          onClick={() => setSelected(next)}
          href={`#slide${next}`}
          className="btn flex px-3 rounded-sm"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
