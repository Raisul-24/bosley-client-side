import HairRestorationCard from "./HairRestorationCard/HairRestorationCard";

const HairRestorationDetailsSection = () => {
  const hairRestorationData = [
    {
      id: 1,
      title: "Proven Techniques",
      description:
        "Our advanced surgical and non-surgical hair restoration techniques are simple and effective at restoring your hair – and your confidence.",
      icon: "https://www.bosley.com/wp-content/uploads/2021/08/icon-proven.svg", // Replace with the actual icon file or URL
      buttonContent: "Why Choose Bosley",
    },
    {
      id: 2,
      title: "Experienced Physicians",
      description:
        "Artistry in hair restoration only comes with experience, and no one has more experience in natural hairline design than we do.",
      icon: "https://www.bosley.com/wp-content/uploads/2021/08/brand1.svg", // Replace with the actual icon file or URL
      buttonContent: "Meet Our Doctors",
    },
    {
      id: 3,
      title: "Personalized Solutions",
      description:
        "Our compassionate physicians and counselors understand the challenges of dealing with hair loss, and we’re dedicated to helping you recapture the confidence and happiness you deserve.",
      icon: "https://www.bosley.com/wp-content/uploads/2021/08/brand2.svg", // Replace with the actual icon file or URL
      buttonContent: "Get a Free Consultation Today", // Add button text if necessary
    },
  ];

  return (
    <div className="bg-[#112341]">
      <div className="relative flex flex-col lg:flex-row md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1350px] mx-auto px-5 pb-0 md:px-16 py-12 md:pb-0 lg:px-28 lg:py-24 my-28">
        <div className="grid md:grid-cols-2 gap-6 lg:basis-[80%] xl:basis-[70%] relative z-[60]">
          {hairRestorationData.map((data) => (
            <HairRestorationCard key={data.id} hairRestorationCardData={data} />
          ))}
        </div>
        <div className="lg:absolute z-10 right-0 bottom-0 w-full lg:w-[80%] xl:w-[65%]">
          <img
            src="https://www.bosley.com/wp-content/uploads/2023/12/Bosley-Patient-Ryan-B-Transparent.png"
            alt=""
          />
          <div className="absolute left-[4%] md:left-[20%] bottom-5 text-white w-[130px] py-3 px-4 rounded-lg">
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70 z-0 rounded-lg"></div>
            <h6 className="relative z-10 text-xs font-semibold">Joshua A.</h6>
            <small className="relative z-10 leading-none block text-[9px]">
              Actual Bosley Patient Individual results mary vary.
            </small>
          </div>
          <div className="absolute w-[188px] lg:w-[300px] right-2 bottom-6 md:right-28 md:bottom-10">
          <img
            src="https://www.bosley.com/wp-content/uploads/2023/12/Bosley-Patient-Ryan-B-Before-and-After.png"
            alt=""
          />
          <div className="flex justify-around absolute w-full bottom-3 text-white">
            <span>Before</span>
            <span>After</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HairRestorationDetailsSection;
