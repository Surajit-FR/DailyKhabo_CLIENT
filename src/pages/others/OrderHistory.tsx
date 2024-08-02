import PageTopSection from "../../components/common/PageTopSection";
import { CustomHeaders } from "../../types/common.";
import OrderHistoryContent from "../../components/core/order_history/OrderHistoryContent";
import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../services/slices/UserSlice";
import { OrderItem } from "../../types/order";

type OrderHistory_props = {
    header: CustomHeaders | undefined;
}

const OrderHistory = ({ header }: OrderHistory_props): JSX.Element => {
    const { orders_data } = useSelector((state: any) => state.userSlice);
    const [orders, setOrders] = useState<Array<OrderItem>>([]);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(getAllOrders({
            page: 0,
            pageSize: 0,
            searchQuery: "",
            header
        }))
    }, [dispatch, header]);

    useEffect(() => {
        setOrders(orders_data);
    }, [orders_data]);

    return (
        <>
            {/* Header Section */}
            <PageTopSection pageName="Order History" />
            {/* Content Section */}
            <OrderHistoryContent orders={orders} header={header} />
        </>
    );
};

export default OrderHistory;