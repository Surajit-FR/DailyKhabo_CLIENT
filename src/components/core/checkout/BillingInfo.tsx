import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { orderValidationSchema } from '../../../helpers/FormValidation';
import { DecryptData } from '../../../helpers/EncryptDecrypt';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../../../services/slices/CartSlice';
import { useEffect, useState } from 'react';
import { getUserDetails } from '../../../services/slices/UserSlice';
import { CustomHeaders } from '../../../types/common.';
import { CartItem } from '../../../types/cart';
import { Address } from '../../../types/address';
import { FormValues } from '../../../types/formValues';

type BillingInfo_props = {
    header: CustomHeaders | undefined,
    cartData: Array<CartItem>,
    SubTotalAmount: number,
    DiscountAmount: number,
    ShippingCharge: number,
    TotalAmountWithShipping: number,
    couponCode: string,
}

const BillingInfo = ({ cartData, header, SubTotalAmount, DiscountAmount, ShippingCharge, TotalAmountWithShipping, couponCode }: BillingInfo_props): JSX.Element => {
    const { user_data } = useSelector((state: any) => state.userSlice);
    const dispatch: Dispatch<any> = useDispatch();
    const navigate: any = useNavigate();

    const [address, setAddress] = useState<Array<Address>>([]);
    const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);

    const user: any = window.localStorage.getItem("user");
    const _USER = DecryptData(user ? user : "");

    const itemData: Array<{ cart: string; product: string; quantity: number }> = cartData?.map((item) => {
        return {
            cart: item?._id,
            product: item?.product?._id,
            quantity: item?.cart_quantity,
        };
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm, setValues } = useFormik({
        initialValues: {
            email: _USER?.email,
            full_name: _USER?.full_name,
            phone: '',
            address: '',
            apartment: '',
            country: 'India',
            state: '',
            city: '',
            postalCode: '',
            payment: 'cod',
        },
        validationSchema: orderValidationSchema,
        onSubmit: (values) => {
            const data: FormValues = {
                customer: {
                    email: values.email.trim(),
                    full_name: values.full_name.trim(),
                    phone: values.phone.trim(),
                    address: values.address.trim(),
                    apartment: values.apartment.trim(),
                    country: values.country.trim(),
                    state: values.state.trim(),
                    city: values.city.trim(),
                    postalCode: values.postalCode.trim(),
                },
                items: itemData,
                shipping: {
                    type: ShippingCharge > 0 ? "paid" : "free",
                    cost: ShippingCharge,
                },
                payment: values.payment,
                subtotal: SubTotalAmount,
                discount: DiscountAmount,
                total: TotalAmountWithShipping,
                couponCode: couponCode,
            };
            dispatch(placeOrder({ data, resetForm, navigate, header }));
        },
    });

    const renderError = (error: any) => {
        if (typeof error === "string") {
            return <p className="text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>*{error}</p>;
        }
        return null;
    };

    const handleAddressClick = (addressId: string) => {
        const selected = address.find((addr) => addr._id === addressId);
        setSelectedAddressId(addressId);
        if (selected) {
            setValues({
                ...values,
                address: selected.address,
                apartment: selected.apartment,
                phone: selected.phone,
                country: selected.country,
                state: selected.state,
                city: selected.city,
                postalCode: selected.postalCode,
            });
        }
    };

    useEffect(() => {
        dispatch(getUserDetails({ header }));
    }, [dispatch, header]);

    useEffect(() => {
        setAddress(user_data?.address)
    }, [user_data?.address]);


    return (
        <>
            <div className="col-lg-7">
                <div className="checkout_text">
                    <h4>Contact Information</h4>
                    <div className="border_left mt-3">
                        <h6>We'll use this email to send you details and updates about your order.</h6>
                        {touched?.email && renderError(errors?.email)}
                        <input
                            className="email_text"
                            type="text"
                            placeholder="Email address"
                            name='email'
                            value={values?.email || ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ border: touched?.email && errors?.email ? "1px solid red" : "" }}
                        />
                    </div>
                </div>

                <div className="checkout_text mt-4">
                    <h4>Select Billing Address</h4>
                    <div className="row">
                        {
                            address?.length > 0 &&
                            address?.map((item: Address) => {
                                const { address, apartment, country, state, city, postalCode } = item;
                                const formatAddress = `${address}, ${apartment ? `${apartment}, ` : ''}${state}, ${country}, ${city} - ${postalCode}`;
                                return (
                                    <div className="col-md-4" key={item?._id}>
                                        <div className='address-card' onClick={() => handleAddressClick(item?._id)}
                                            style={{
                                                backgroundColor: selectedAddressId === item._id ? "#ddd" : "transparent",
                                                border: selectedAddressId === item._id ? "2px solid #898989" : "2px solid #ccc",
                                            }}
                                        >
                                            <p>{formatAddress}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="border_left mt-3">
                        <h6>Or Enter the billing address manually.</h6>
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                {touched?.full_name && renderError(errors?.full_name)}
                                <input
                                    className="email_text"
                                    type="text"
                                    placeholder="Full name"
                                    name='full_name'
                                    value={values?.full_name || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.full_name && errors?.full_name ? "1px solid red" : "" }}
                                />
                            </div>

                            <div className="col-md-6 col-lg-6">
                                {touched?.phone && renderError(errors?.phone)}
                                <input
                                    className="email_text"
                                    type="text"
                                    placeholder="Phone number"
                                    name='phone'
                                    value={values?.phone || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.phone && errors?.phone ? "1px solid red" : "" }}
                                />
                            </div>

                            <div className="col-md-12 col-lg-12">
                                {touched?.address && renderError(errors?.address)}
                                <input
                                    className="email_text"
                                    type="text"
                                    placeholder="Address"
                                    name='address'
                                    value={values?.address || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.address && errors?.address ? "1px solid red" : "" }}
                                />
                            </div>

                            <div className="col-md-12 col-lg-12">
                                <input
                                    className="email_text"
                                    type="text"
                                    placeholder="Apartment, suite, etc. (optional)"
                                    name='apartment'
                                    value={values?.apartment || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>

                            <div className="col-md-6 col-lg-6">
                                {touched?.country && renderError(errors?.country)}
                                {/* <select
                                    className="email_text"
                                    name="country"
                                    value={values?.country || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.country && errors?.country ? "1px solid red" : "" }}
                                >
                                    <option value="India" selected>India</option>
                                </select> */}
                                <input
                                    className="email_text"
                                    type="text"
                                    placeholder="Country"
                                    name='country'
                                    value={values?.country || "India"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.country && errors?.country ? "1px solid red" : "" }}
                                />
                            </div>

                            <div className="col-md-6 col-lg-6">
                                {touched?.state && renderError(errors?.state)}
                                <input
                                    className="email_text"
                                    type="text"
                                    placeholder="State"
                                    name='state'
                                    value={values?.state || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.state && errors?.state ? "1px solid red" : "" }}
                                />
                            </div>

                            <div className="col-md-6 col-lg-6">
                                {touched?.city && renderError(errors?.city)}
                                <input
                                    className="email_text"
                                    type="text"
                                    placeholder="City"
                                    name='city'
                                    value={values?.city || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.city && errors?.city ? "1px solid red" : "" }}
                                />
                            </div>

                            <div className="col-md-6 col-lg-6">
                                {touched?.postalCode && renderError(errors?.postalCode)}
                                <input
                                    className="email_text"
                                    type="text"
                                    placeholder="Postal Code"
                                    name='postalCode'
                                    value={values?.postalCode || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.postalCode && errors?.postalCode ? "1px solid red" : "" }}
                                />
                            </div>
                        </div>

                    </div>

                </div>

                <div className="checkout_text mt-4">
                    <h4>Payment Options</h4>
                    <div className="border_left mt-3">
                        <ul className="radio_cash">
                            <li>
                                <label>
                                    <input
                                        className="radio_1"
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={values.payment === "cod"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    /> Cash on delivery
                                </label>
                            </li>

                            <li>
                                <label>
                                    <input
                                        className="radio_1"
                                        type="radio"
                                        name="payment"
                                        value="stripe"
                                        checked={values.payment === "stripe"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    /> Stripe
                                </label>
                            </li>
                        </ul>
                        <div className="cash1 box_radio">
                            <p>Pay with cash upon delivery.</p>
                        </div>
                        <div className="paypal1 box_radio">
                            <Link to="#" className="btn_rest">
                                <img src="/assets/images/paypal/1.png" alt="" />
                            </Link>
                        </div>
                        <div className="stripe1 box_radio">
                            <Link to="#" className="btn_rest stripe2">
                                <img src="/assets/images/paypal/s1.svg" alt="" />
                            </Link>
                        </div>
                    </div>
                    <p className="mt-4 mb-4 by_12">By proceeding with your purchase you agree to our Terms and
                        Conditions and Privacy Policy</p>

                    <div className="row">
                        <div className="col-lg-6">
                            <Link className="return" to="/cartproducts">
                                <i className="fa-solid fa-arrow-left-long"></i>Return to Cart
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link
                                to="#"
                                className="btn"
                                onClick={() => handleSubmit()}
                            >Place Order</Link>
                        </div>
                    </div>
                </div>

            </div >
        </>
    );
};

export default BillingInfo;