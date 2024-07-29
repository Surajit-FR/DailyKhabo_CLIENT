import { useState } from "react";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { contactUsValidationSchema } from "../../../helpers/FormValidation";
import { REACT_APP_RECAPTCHA_SITE_KEY } from "../../../config/App.config";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { contactUs } from "../../../services/slices/UtilitySlice";
import { CustomHeaders } from "../../../types/common.";

type ContactUs_props = {
    header: CustomHeaders | undefined
}

const ContactUsForm = ({ header }: ContactUs_props): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm, isValid } = useFormik({
        initialValues: {
            full_name: "",
            designation: "",
            email: "",
            phone: "",
            message: ""
        },
        validationSchema: contactUsValidationSchema,
        onSubmit: (values) => {
            if (recaptchaToken) {
                dispatch(contactUs({ data: values, resetForm, header }));
            };
        }
    });

    const onRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    return (
        <>
            <div className="contact padding-tb">
                <div className="container">
                    <div className="section-wrapper row">
                        <div className="col-lg-8 col-12">
                            <div className="contact-part">
                                <div className="contact-title">
                                    <h4>Send Message us</h4>
                                </div>
                                <form className="row" onSubmit={handleSubmit}>
                                    <div className="col-lg-6 col-md-6">
                                        {touched?.full_name && errors?.full_name && (
                                            <div className="text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>*{errors.full_name}</div>
                                        )}
                                        <input
                                            className="email_text"
                                            type="text"
                                            placeholder="Full name"
                                            name="full_name"
                                            value={values?.full_name || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{ border: touched?.full_name && errors?.full_name ? "1px solid red" : "" }}
                                        />
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        {touched?.email && errors?.email && (
                                            <div className="text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>*{errors.email}</div>
                                        )}
                                        <input
                                            className="email_text"
                                            type="text"
                                            placeholder="Email address"
                                            name="email"
                                            value={values?.email || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{ border: touched?.email && errors?.email ? "1px solid red" : "" }}
                                        />
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        {touched?.phone && errors?.phone && (
                                            <div className="text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>*{errors?.phone}</div>
                                        )}
                                        <input
                                            className="email_text"
                                            type="text"
                                            placeholder="Phone number"
                                            name="phone"
                                            value={values?.phone || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            maxLength={10}
                                            style={{ border: touched?.phone && errors?.phone ? "1px solid red" : "" }}
                                        />
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <input
                                            className="email_text"
                                            type="text"
                                            placeholder="Yor Designation (If any)"
                                            name="designation"
                                            value={values?.designation || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        {touched?.message && errors?.message && (
                                            <div className="text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>*{errors.message}</div>
                                        )}
                                        <textarea
                                            rows={7}
                                            placeholder="Enter Your Message"
                                            name="message"
                                            value={values?.message || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{ border: touched?.message && errors?.message ? "1px solid red" : "" }}
                                        ></textarea>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="mb-5">
                                            <ReCAPTCHA
                                                sitekey={REACT_APP_RECAPTCHA_SITE_KEY}
                                                onChange={onRecaptchaChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button className="btn" type="submit" disabled={!isValid || !recaptchaToken}>Submit Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="contact-info">
                                <h3>Quick Contact</h3>
                                <p>Continually productize compelling quality dome packed with all Elated Themes ently utilize website and creating pages corporate </p>
                                <ul className="contact-location">
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-phone-volume"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>+88130-589-745-6987</p>
                                            <p>+1655-456-523</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>Email@email.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>25/2 Lane2 Vokte Street Building Melborn City</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsForm;