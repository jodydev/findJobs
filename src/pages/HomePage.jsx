import SearchBar from "../components/SearchBar";
import CarouselInfo from "../components/CarouselInfo";
import RecommendedJobs from "../components/RecommendedJobs";
import NewJobs from "../components/NewJobs";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
    <Header />
      <SearchBar />
      <CarouselInfo />
      <RecommendedJobs />
      <NewJobs />
      <Footer />
    </>
  );
}
