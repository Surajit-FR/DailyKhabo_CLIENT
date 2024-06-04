import PageTopSection from "../../common/PageTopSection";
import AllProducts from "./product_content/AllProducts";

const GirCowsGhee = (): JSX.Element => {

    return (
        <>
            {/* PageHeader Section */}
            <PageTopSection pageName="Desi Ghee" />

            {/* AllProducts */}
            <AllProducts />
        </>
    );
};

export default GirCowsGhee;