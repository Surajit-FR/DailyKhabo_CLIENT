import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import MobileSection from "./components/common/MobileSection";
import Search from "./components/common/Search";
import AllRoutes from "./routes/AllRoutes";

const App = (): JSX.Element => {
  return (
    <>
      {/* search-area */}
      <Search />

      {/* mobile-nav section start here */}
      <MobileSection />

      {/* header section start here  */}
      <Header />

      {/* All Routes */}
      <AllRoutes />

      {/* footer section start here */}
      <Footer />
    </>
  );
};

export default App;
