import PageTopSection from "../../components/common/PageTopSection";
import Products from "../../components/core/cart/Products";

const CartProducts = (): JSX.Element => {
    return (
        <>
            {/* PageHeader Section */}
            <PageTopSection pageName="Products" />

            {/* Cart Products */}
            <Products />
        </>
    );
};

export default CartProducts;