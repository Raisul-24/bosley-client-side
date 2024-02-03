
import Banner from "../Banner/Banner";
import HairRestorationDetailsSection from "../HairRestorationDetailsSection/HairRestorationDetailsSection";
import HairTransplantSolution from "../HairTransplantSolution/HairTransplantSolution";
import LearnMore from "../LearnMore/LearnMore";
import NonSurgicalRegrowthSection from "../NonSurgicalRegrowthSection/NonSurgicalRegrowthSection";
import SeenIn from "../SeenIn/SeenIn";

const Home = () => {
  return (
    <>
      <Banner />
      <HairTransplantSolution />
      <NonSurgicalRegrowthSection />
      <HairRestorationDetailsSection />
      <SeenIn></SeenIn>
      <LearnMore></LearnMore>
    </>
  );
};

export default Home;
