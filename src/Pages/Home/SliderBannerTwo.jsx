import { Carousel } from "@material-tailwind/react";

const SliderBannerTwo = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-lg md:text-xl lg:text-3xl text-center font-semibold my-8 mx-2 md:mx-20 lg:mx-48">
                Join the millions of men and women who have come to Bosley for answers to their hair restoration questions</h2>
            <Carousel
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-['']  ${activeIndex === i ? "w-8 bg-orange-900" : "w-4 bg-blue-gray-300"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <img
                    src="https://i.ibb.co/fYCBrHH/img1.png"
                    alt="image 1"
                    className="h-70vh w-full object-cover px-0 md:px-12 lg:px-20"
                />
                <img
                    src="https://i.ibb.co/dgVXcLL/img2.png"
                    alt="image 2"
                    className="h-full w-full object-cover px-0 md:px-12 lg:px-20"
                />
                <img
                    src="https://i.ibb.co/kXKwjtD/img3.png"
                    alt="image 3"
                    className="h-full w-full object-cover px-0 md:px-12 lg:px-20"
                />
                <img
                    src="https://i.ibb.co/kgdcPTD/img4.png"
                    alt="image 4"
                    className="h-full w-full object-cover px-0 md:px-12 lg:px-20"
                />
            </Carousel>
        </div>
    );
};

export default SliderBannerTwo;