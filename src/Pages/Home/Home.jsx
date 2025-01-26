import React from "react";
import "./Home.css";
import Herosection from "../../Components/Herosection/Herosection";
import SearchForm from "../../Components/SearchForm/SearchForm";
import LastHolidaySection from "../../Components/LastHolidaySection/LastHolidaySection";
import RecommendedSection from "../../Components/RecommendedSection/RecommendedSection";
import HalidayPlanSection from "../../Components/HalidayPlanSection/HalidayPlanSection";
function Home() {
  return (
    <div className="home-page">
      <Herosection />
      <SearchForm />
      <LastHolidaySection />
      <div className="my-4 my-sm-5">
        <RecommendedSection  itemRecommendedTitle='Recommended For you'/>
      </div>
      <HalidayPlanSection itemHalidayPlanSectionTitle='Plan your holiday'/>
    </div>
  );
}

export default Home;
