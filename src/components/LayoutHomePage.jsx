import Header from "./Header";
import Footer from "./Footer";

export default function LayoutHomePage({ children }) {
  return (
    <>
      <Header />

      <main>

      { children }
       
      </main>

      <Footer />
    </>
  );
}
