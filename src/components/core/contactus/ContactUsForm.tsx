import { useState } from "react";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { contactUsValidationSchema } from "../../../helpers/FormValidation";
import { REACT_APP_RECAPTCHA_SITE_KEY } from "../../../config/App.config";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { contactUs } from "../../../services/slices/UtilitySlice";


const ContactUsForm = (): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm, isValid } = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        },
        validationSchema: contactUsValidationSchema,
        onSubmit: (values) => {
            if (recaptchaToken) {
                dispatch(contactUs({ data: values, resetForm }));
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
                                <form className="contact-form d-flex flex-wrap justify-content-between" onSubmit={handleSubmit}>
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
                                    {touched.full_name && errors.full_name && (
                                        <p className="text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>*{errors.full_name}</p>
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
                                    {touched.email && errors.email && (
                                        <p className="text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>*{errors.email}</p>
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
                                    {touched.phone && errors.phone && (
                                        <p className="text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>*{errors.phone}</p>
                                    )}

                                    <input
                                        className="email_text"
                                        type="text"
                                        placeholder="Enter Subject"
                                        name="subject"
                                        value={values?.subject || ""}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ border: touched?.subject && errors?.subject ? "1px solid red" : "" }}
                                    />
                                    {touched.subject && errors.subject && (
                                        <p className="text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>*{errors.subject}</p>
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
                                    {touched.message && errors.message && (
                                        <p className="text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>*{errors.message}</p>
                                    )}

                                    <div className="mb-5">
                                        <ReCAPTCHA
                                            sitekey={REACT_APP_RECAPTCHA_SITE_KEY}
                                            onChange={onRecaptchaChange}
                                        />
                                    </div>
                                    <input className="btn" type="submit" value="Submit Now" disabled={!isValid || !recaptchaToken} />
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