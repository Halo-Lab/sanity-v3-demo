import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Benefits from "./components/Benefits/Benefits";
import Stats from "./components/Stats/Stats";
import MobileApp from "./components/MobileApp/MobileApp";
import Testimonials from "./components/Testimonials/Testimonials";

const Home = ({ page }) => {
  console.log(page)
  return (
    <div className="homepage">
      <Hero data={page} />
      <Partners data={page} />
      <Benefits data={page} />
      <Stats data={page} />
      <MobileApp data={page} />
      <Testimonials data={page} />
    </div>
  );
};

export default Home;
