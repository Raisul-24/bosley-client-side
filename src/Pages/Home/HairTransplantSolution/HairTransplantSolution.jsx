const HairTransplantSolution = () => {
  return (
    <div className="card flex-col justify-start lg:flex-row card-side md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1350px] mx-auto items-center gap-0 md:gap-14 lg:gap-20 my-28 rounded-non px-5 md:px-8">
      <div className="relative pr-6 pb-6">
        <img
          className="rounded-xl "
          src="https://www.bosley.com/wp-content/uploads/2021/09/josh-testimonial.jpg"
          alt="Movie"
        />
        <div className="absolute w-[188px] lg:w-[300px] right-0 bottom-0">
          <img
            src="https://www.bosley.com/wp-content/uploads/2021/10/josh-before-after.jpg"
            alt=""
          />
          <div className="flex justify-around absolute w-full bottom-3 text-white">
            <span>Before</span>
            <span>After</span>
          </div>
        </div>
        <div className="absolute left-4 bottom-9 text-white w-[130px] py-3 px-4 rounded-lg">
          <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70 z-0 rounded-lg"></div>
          <h6 className="relative z-10 text-xs font-semibold">Joshua A.</h6>
          <small className="relative z-10 leading-none block text-[9px]">Actual Bosley Patient Individual results mary vary.</small>
        </div>
      </div>
      <div className="card-body p-0 lg:basis-[60%] xl:basis-[50%] items-start gap-8">
        <img
          src="https://www.bosley.com/wp-content/uploads/2021/08/hair-follicle-icon.svg"
          alt=""
        />
        <h2 className="card-title text-5xl gap-5">Hair Transplant Solutions</h2>
        <p>
          A hair transplant from Bosley is the proven, permanent solution to
          genetic hair loss. Using next-generation hair restoration techniques,
          Bosley physicians are able to create seamless transitions as soft and
          silky as your original hairline with results that look completely
          natural.
        </p>
        <button className="btn bg-[#1b3663] hover:bg-[#112341] text-white">
          View All Hair Transplant Solutions
        </button>
      </div>
    </div>
  );
};

export default HairTransplantSolution;
