import { Link } from "react-router-dom";
import { OrderItem } from "../../../types/order";
import { formatDate } from "../../../helpers/Formatter";
import { getImagUrl } from "../../../helpers/getImage";
import { handlePrintPdf } from "../../../helpers/DownloadFile";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceDetails } from "../../../services/slices/UserSlice";
import { Dispatch } from "redux";
import { CustomHeaders } from "../../../types/common.";

type OrderDetail_Props = {
    header: CustomHeaders | undefined;
    order: OrderItem;
};

const OrderDetail = ({ header, order }: OrderDetail_Props): JSX.Element => {
    const { invoice_details_data } = useSelector((state: any) => state.userSlice);
    const dispatch: Dispatch<any> = useDispatch();

    const token: string | null = window.localStorage.getItem("token");
    const _TOKEN = useMemo(() => JSON.parse(token ?? 'null'), [token]);

    // Memoize header and order._id to prevent unnecessary effect calls
    const orderId = useMemo(() => order?._id, [order?._id]);
    const memoizedHeader = useMemo(() => header, [header]);

    useEffect(() => {
        if (orderId && memoizedHeader) {
            dispatch(getInvoiceDetails({ order_id: orderId, header: memoizedHeader }));
        }
    }, [dispatch, orderId, memoizedHeader]);

    return (
        <>
            <table className="order_plach">
                <thead>
                    <tr>
                        <th>
                            <h5>Order Number</h5>
                            <p>{order?.orderId}</p>
                        </th>
                        <th>
                            <h5>Date placed</h5>
                            <p>{formatDate(order?.createdAt, "date")}</p>
                        </th>
                        <th>
                            <h5>Total Amount</h5>
                            <p>₹{order?.total}</p>
                        </th>
                        <th>
                            <h5 className="text-center">Quantity</h5>
                        </th>
                        <th>
                            <h6 className="text-center" onClick={() => handlePrintPdf(invoice_details_data, _TOKEN)}>
                                <Link to="#">VIEW INVOICE</Link>
                            </h6>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order?.items?.map((item: any, index: number) => (
                            <tr key={index}>
                                <th style={{ width: "20%" }}>
                                    <div className="images_histry">
                                        <img src={getImagUrl(item?.product?.productImages[0])} alt="" />
                                    </div>
                                </th>
                                <th style={{ width: "40%" }}>
                                    <div className="text_histry">
                                        <h4>{item?.product?.productTitle}</h4>
                                    </div>
                                </th>
                                <th style={{ width: "15%" }}>
                                    <div className="prices_box">
                                        <h6>₹{item?.product?.price}</h6>
                                    </div>
                                </th>
                                <th style={{ width: "10%" }}>
                                    <div className="text_histry">
                                        <h4>{item?.quantity}</h4>
                                    </div>
                                </th>
                                <th style={{ width: "15%" }}>
                                    <h5 className="delivered pr-2">{`Delivered on ${formatDate(order?.updatedAt, "date")}`}</h5>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};

export default OrderDetail;