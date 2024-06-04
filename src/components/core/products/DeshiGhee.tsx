import PageTopSection from "../../common/PageTopSection";
import AllProducts from "./product_content/AllProducts";

const DeshiGhee = (): JSX.Element => {
    return (
        <>
            {/* PageHeader Section */}
            <PageTopSection pageName="Deshi Ghee" />

            {/* AllProducts */}
            <AllProducts />
        </>
    );
};

export default DeshiGhee;