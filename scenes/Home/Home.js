"use client";
import RenderSection from "../../components/sections/RenderSection";

const Home = ({ page }) => {
  return (
    <div className="homepage">
      			{page.content?.map((section) => {
				return <RenderSection key={section._key} section={section} />
			})}
    </div>
  );
};

export default Home;
