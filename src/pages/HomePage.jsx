import Hero from "../component/Hero";
import HomeCards from "../component/HomeCards";
import JobListings from "../component/jobListings";
import ViewAll from "../component/viewAll";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skill set"
      />
      <HomeCards />
      <JobListings isHome={true}/>
      <ViewAll />
    </>
  );
};

export default HomePage;
