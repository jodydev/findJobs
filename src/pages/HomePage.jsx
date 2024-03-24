import SearchBar from "../components/SearchBar";
import CarouselInfo from "../components/CarouselInfo";
import RecommendedJobs from "../components/RecommendedJobs";
import NewJobs from "../components/NewJobs";

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <CarouselInfo />
      <RecommendedJobs />
      <NewJobs />
    </>
  );
}
