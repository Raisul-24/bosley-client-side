import SliderBannerItem from "./SliderBannerItem/SliderBannerItem";

const SliderBanner = () => {
  const carouselItems = [
    {
      title: "WHO IS PLANNING THE SURGERY",
      description:
        "Don’t allow a non-doctor to make surgical planning decisions",
      image:
        "https://www.bahrs.co.uk/content/gallery/5d88cdf9e05ff4.32167525.jpg",
      id: 1,
      prev: 4,
      next: 2,
    },
    {
      title: "Is fue scarless?",
      description:
        "You may have seen advertisements in magazines, social media, and various websites that talk about hair transplant surgery being “scarless”. This is not true.",
      image:
        "https://www.bahrs.co.uk/content/gallery/5d88cdf9a86e13.11252129.jpg",
      id: 2,
      prev: 1,
      next: 3,
    },
    {
      title: "WHO IS PLANNING THE SURGERY?",
      descriptionL:
        "Don’t allow a non-doctor to make surgical planning decisions",
      image:
        "https://www.bahrs.co.uk/content/gallery/5d88cdf90c4dd6.28515383.jpg",
      id: 3,
      prev: 2,
      next: 4,
    },
    {
      title: "IS THE CLINIC LEGAL?",
      description:
        "All hair transplant clinics in England AND all locations where hair transplant surgery is done in England must be CQC registered. Check the regulations in Scotland, Wales, Northern Ireland and the Republic of Ireland",
      image:
        "https://www.bahrs.co.uk/content/gallery/5d88cdfb1dfd08.95428704.jpg",
      id: 4,
      prev: 3,
      next: 5,
    },
    {
      title: "BEWARE OF MIDDLEMEN AND BROKERS!",
      description:
        "Beware of websites that don’t list who the doctors are along with their qualifications and experience",
      image:
        "https://www.bahrs.co.uk/content/gallery/5d88cdfa0e1db4.08660936.jpg",
      id: 5,
      prev: 4,
      next: 1,
    },
  ];

  return (
    <div className="mb-28 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1350px] mx-auto">
      <div className="carousel w-full">
         {
            carouselItems.map(carouselItem => <SliderBannerItem key={carouselItems.id} carouselItem={carouselItem} />)
         }
      </div>
    </div>
  );
};

export default SliderBanner;
