
import Banner from "../Banner/Banner";
import HairRestorationDetailsSection from "../HairRestorationDetailsSection/HairRestorationDetailsSection";
import HairTransplantSolution from "../HairTransplantSolution/HairTransplantSolution";
import LearnMore from "../LearnMore/LearnMore";
import NonSurgicalRegrowthSection from "../NonSurgicalRegrowthSection/NonSurgicalRegrowthSection";
import SeenIn from "../SeenIn/SeenIn";
import SliderBanner from "../SliderBanner/SliderBanner";
import SliderBannerTwo from "../SliderBannerTwo";

const Home = () => {
  return (
    <>
      <Banner />
      <SliderBanner />
      <HairTransplantSolution />
      <NonSurgicalRegrowthSection />
      <HairRestorationDetailsSection />
      <SliderBannerTwo></SliderBannerTwo>
      <SeenIn></SeenIn>
      <LearnMore></LearnMore>
    </>
  );
};

export default Home;
