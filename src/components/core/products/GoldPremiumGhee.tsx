import PageTopSection from "../../common/PageTopSection";
import AllProducts from "./product_content/AllProducts";

const GoldPremiumGhee = (): JSX.Element => {
    return (
        <>
            {/* PageHeader Section */}
            <PageTopSection pageName="Gold Premium Ghee" />

            {/* AllProducts */}
            <AllProducts />
        </>
    );
};

export default GoldPremiumGhee;