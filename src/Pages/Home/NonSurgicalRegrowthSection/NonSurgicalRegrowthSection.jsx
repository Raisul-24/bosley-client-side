const NonSurgicalRegrowthSection = () => {
  return (
    <div className="card flex-col justify-start lg:flex-row-reverse card-side md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1350px] mx-auto items-center gap-8 md:gap-14 lg:gap-20 my-28 rounded-non px-5 md:px-8">
      <div className="relative pr-6 pb-6">
        <img
          className="rounded-xl "
          src="https://www.bosley.com/wp-content/uploads/2021/10/tar_2347.jpg"
          alt="Movie"
        />
        <div className="absolute left-4 bottom-9 text-white w-[130px] py-3 px-4 rounded-lg">
          <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70 z-0 rounded-lg"></div>
          <h6 className="relative z-10 text-xs font-semibold">Joshua A.</h6>
          <small className="relative z-10 leading-none block text-[9px]">
            Actual Bosley Patient Individual results mary vary.
          </small>
        </div>
      </div>
      <div className="card-body p-0 lg:basis-[60%] xl:basis-[50%] items-start gap-8">
        <img
          src="https://www.bosley.com/wp-content/uploads/2021/08/icon-revitalist.svg"
          alt=""
        />
        <h2 className="card-title text-5xl gap-5">
          Non-Surgical Hair Regrowth
        </h2>
        <p>
          Bosley also offers a variety of non-surgical hair loss solutions that
          are proven effective at retaining, strengthening, thickening, and
          growing the hair you have. Whether you’ve just started to notice the
          signs of hair loss or want to proactively address future hair loss,
          Bosley has a solution that can help.
        </p>
        <button className="btn bg-[#1b3663] hover:bg-[#112341] text-white">
          View All Non-Surgical Solutions
        </button>
      </div>
    </div>
  );
};

export default NonSurgicalRegrowthSection;
