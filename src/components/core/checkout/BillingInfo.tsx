import { Link } from 'react-router-dom';
import { CartItemType, CustomHeadersType } from '../../../config/DataTypes.config';

type BillingInfo_props = {
    cartData: Array<CartItemType>;
    TotalAmount: number;
    header: CustomHeadersType | undefined
}

const BillingInfo = ({ cartData, TotalAmount, header }: BillingInfo_props): JSX.Element => {
    return (
        <>
            <div className="col-lg-7">
                <div className="checkout_text">
                    <h4>Contact Information</h4>
                    <div className="border_left mt-3">
                        <h6>We'll use this email to send you details and updates about your order.</h6>
                        <input className="email_text" type="email" name="" placeholder="Email address" />
                    </div>
                </div>

                <div className="checkout_text mt-4">
                    <h4>Billing Address</h4>
                    <div className="border_left mt-3">
                        <h6>Enter the billing address that matches your payment method.</h6>
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <input className="email_text" type="text" name="" placeholder="First name" />
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <input className="email_text" type="text" name="" placeholder="Last name" />
                            </div>
                            <div className="col-md-12 col-lg-12">
                                <input className="email_text" type="text" name="" placeholder="Address" />
                            </div>
                            <div className="col-md-12 col-lg-12">
                                <input className="email_text" type="text" name="" placeholder="Apartment, suite, etc. (optional)" />
                            </div>
                            <div className="col-md-12 col-lg-12">
                                <select className="email_text" name="country">
                                    <option value="India">India</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Canada">Canada</option>
                                    <option value="American Samoa">American Samoa</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <input className="email_text" type="text" name="" placeholder="State" />
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <input className="email_text" type="text" name="" placeholder="City" />
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <input className="email_text" type="text" name="" placeholder="Postal code" />
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <input className="email_text" type="text" name="" placeholder="Phone (optional)" />
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
                                    <input className="radio_1" type="radio" name="colorRadio" value="delivery" /> Cash on delivery
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input className="radio_1" type="radio" name="colorRadio" value="paypal" /> PayPal
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input className="radio_1" type="radio" name="colorRadio" value="stripe" /> Stripe
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
                            <Link className="return" to="/cartproducts"><i className="fa-solid fa-arrow-left-long"></i> Return to
                                Cart</Link>
                        </div>
                        <div className="col-lg-6">
                            <Link to="#" className="btn">Place Order</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default BillingInfo;