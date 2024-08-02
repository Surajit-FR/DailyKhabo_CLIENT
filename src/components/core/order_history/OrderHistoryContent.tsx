import { CustomHeaders } from "../../../types/common.";
import { OrderItem } from "../../../types/order";
import OrderDetail from "./OrderDetail";

type OrderHistoryContent_Props = {
    header: CustomHeaders | undefined;
    orders: Array<OrderItem>;
}

const OrderHistoryContent = ({ header, orders }: OrderHistoryContent_Props): JSX.Element => {

    return (
        <>
            <div className="proflies_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            {
                                orders?.map((order: OrderItem, index: number) => {
                                    return (
                                        order?.status === "delivered" &&
                                        <OrderDetail
                                            order={order}
                                            key={index}
                                            header={header}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderHistoryContent;