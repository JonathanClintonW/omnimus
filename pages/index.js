import MainSection from "./section/MainSection";
import SpecializationSection from "./section/SpecializationSection";
import SupportSection from "./section/SupportSection";

const Home = () => {
  return (
    <main className="p-4">
      <MainSection />
      <SupportSection />
      <SpecializationSection />
    </main>
  );
};

export default Home;
