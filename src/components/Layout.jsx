import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <SearchBar />

      <main>

      { children }
       
      </main>

      <Footer />
    </>
  );
}
