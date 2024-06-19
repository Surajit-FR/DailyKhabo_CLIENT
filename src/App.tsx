import { useSelector } from "react-redux";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import MobileSection from "./components/common/MobileSection";
import Search from "./components/common/Search";
import AllRoutes from "./routes/AllRoutes";
import PreLoader from "./util/PreLoader";

const App = (): JSX.Element => {
  const { utility_loading } = useSelector((state: any) => state.utilitySlice);
  const { auth_loading } = useSelector((state: any) => state.authSlice);
  const { cart_loading } = useSelector((state: any) => state.cartSlice);

  return (
    <>
      {/* PreLoader */}
      <PreLoader
        loading={utility_loading || auth_loading || cart_loading}
      />

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
