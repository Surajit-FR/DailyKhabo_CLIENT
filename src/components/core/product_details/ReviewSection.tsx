import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "../../../util/StarRating";
import { useFormik } from "formik";
import { DecryptData } from "../../../helpers/EncryptDecrypt";
import { CustomHeadersType, ProductListType, ReviewListType, formValuesType } from "../../../config/DataTypes.config";
import { ratingValidationSchema } from "../../../helpers/FormValidation";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { createReview, getAllReviews } from "../../../services/slices/UtilitySlice";
import { formatDate } from "../../../helpers/Formatter";

type ReviewSection_props = {
    products_details_data: ProductListType,
    header: CustomHeadersType | undefined,
    product_id: string | undefined,
    _TOKEN: any,
};

const ReviewSection = ({ header, products_details_data, product_id, _TOKEN }: ReviewSection_props): JSX.Element => {
    const { review_data } = useSelector((state: any) => state.utilitySlice);
    const user: any = window.localStorage.getItem("user");
    const _USER = DecryptData(user ? user : "");

    const [rating, setRating] = useState<number | null>(null);
    const [hover, setHover] = useState<number | null>(null);
    const [reviewsData, setReviewsData] = useState<Array<ReviewListType>>([]);
    const dispatch: Dispatch<any> = useDispatch();

    const handleRatingChange = (value: number) => {
        setRating(value);
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm, setFieldValue } = useFormik({
        initialValues: {
            product: '',
            email: _USER?.email,
            full_name: _USER?.full_name,
            rating: rating || 0,
            message: '',
        },
        validationSchema: _TOKEN ? ratingValidationSchema : null,
        onSubmit: (values) => {
            if (_TOKEN) {
                const data: formValuesType = {
                    product: values.product,
                    full_name: values.full_name?.trim(),
                    email: values.email?.trim(),
                    rating: values.rating,
                    message: values.message?.trim(),
                };
                // console.log(data);
                dispatch(createReview({ data, product_id, resetForm, setRating, header }));
            }
        },
    });

    const renderError = (error: any) => {
        if (typeof error === "string") {
            return <p className="d-flex text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>*{error}</p>;
        }
        return null;
    };

    useEffect(() => {
        dispatch(getAllReviews({ product_id }));
    }, [dispatch, product_id]);

    // Sync rating state with formik field
    useEffect(() => {
        setFieldValue('rating', rating);
        setFieldValue('product', products_details_data?._id);
        setReviewsData(review_data?.data);
    }, [rating, products_details_data?._id, setFieldValue, review_data]);

    return (
        <>
            <div className="review-showing">
                <ul className="content">
                    {
                        reviewsData && reviewsData?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="post-thumb">
                                        <img src="/assets/images/shop/02.png" alt="shop" />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <Link to="#">{item?.full_name}</Link>
                                                <p>Posted on {formatDate(item?.createdAt, "date")} at {formatDate(item?.createdAt, "time")}</p>
                                            </div>
                                            <StarRating rating={item?.rating} readOnly showText={false} />
                                        </div>
                                        <div className="entry-content">
                                            <p>{item?.message}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="client-review">
                    <div className="review-form">
                        <div className="review-title">
                            <h5>Add a Review</h5>
                        </div>
                        <form className="row" onSubmit={handleSubmit}>
                            <div className="col-md-4 col-12">
                                <input
                                    type="hidden"
                                    placeholder="Full Name"
                                    name="full_name"
                                    value={values.full_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.full_name && errors?.full_name ? "1px solid red" : "" }}
                                />
                                {touched?.full_name && renderError(errors?.full_name)}
                            </div>

                            <div className="col-md-4 col-12">
                                <input
                                    type="hidden"
                                    placeholder="Email Address"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.email && errors?.email ? "1px solid red" : "" }}
                                />
                                {touched?.email && renderError(errors?.email)}
                            </div>

                            <div className="col-md-4 col-12 mb-3">
                                <StarRating
                                    rating={rating}
                                    hoverRating={hover}
                                    onRatingChange={handleRatingChange}
                                    onMouseEnter={setHover}
                                    onMouseLeave={() => setHover(null)}
                                    showText={true}
                                    text="Your rating: "
                                    starSize={23}
                                />
                            </div>

                            <div className="col-md-12 col-12">
                                {touched?.message && renderError(errors?.message)}
                                <textarea
                                    rows={5}
                                    placeholder="Type Here Message"
                                    name='message'
                                    value={values?.message || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ border: touched?.message && errors?.message ? "1px solid red" : "" }}
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <button
                                    className="default-btn"
                                    type="submit"
                                    data-toggle={_TOKEN ? "" : "modal"}
                                    data-target={_TOKEN ? "" : "#exampleAuthModal"}
                                >Submit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewSection;