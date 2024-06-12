import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormikProps, useFormik } from 'formik';
import { passwordValidationSchema, emailValidationSchema } from "../../helpers/FormValidation";
import { clearAuthError, resetPassword, verifyEmail } from "../../services/slices/AuthSlice";
import { Dispatch } from "redux";

interface ForgotPasswordFormValues {
    email?: string;
    password?: string;
    conf_password?: string;
}

const ForgetPassword = (): JSX.Element => {
    const { verification_data } = useSelector((state: any) => state.authSlice);
    const dispatch: Dispatch<any> = useDispatch();
    const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);

    const handleEmailSubmit = async (email: string) => {
        dispatch(verifyEmail({ data: { email } }));
    };

    const handlePasswordReset = async (values: ForgotPasswordFormValues, resetForm: Function) => {
        const data = {
            email: values.email!,
            password: values.password,
        };
        dispatch(resetPassword({ data, resetForm }));
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, resetForm }: FormikProps<ForgotPasswordFormValues> = useFormik<ForgotPasswordFormValues>({
        initialValues: {
            email: "",
            password: "",
            conf_password: "",
        },
        validationSchema: isEmailVerified ? passwordValidationSchema : emailValidationSchema,
        onSubmit: (values) => {
            if (!isEmailVerified) {
                handleEmailSubmit(values.email!);
            } else {
                handlePasswordReset(values, resetForm);
            }
        }
    });

    useEffect(() => {
        if (verification_data?.success) {
            setIsEmailVerified(true);
        }
    }, [verification_data, values.email]);

    useEffect(() => {
        return () => {
            dispatch(clearAuthError());
        };
    }, [dispatch]);


    return (
        <>
            <form className="signup drt_log" onSubmit={handleSubmit}>
                {!isEmailVerified && (
                    <div className="field mb-4">
                        <input
                            className="dt_12"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ border: touched?.email && errors?.email ? "1px solid red" : "" }}
                        />
                        {errors?.email && touched?.email && <p className="d-flex text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>{errors?.email}</p>}
                    </div>
                )}

                {isEmailVerified && (
                    <>
                        <div className="field mb-4">
                            <input
                                className="dt_12"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ border: touched?.password && errors?.password ? "1px solid red" : "" }}
                            />
                            {errors?.password && touched?.password && <p className="d-flex text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>{errors?.password}</p>}
                        </div>

                        <div className="field mb-4">
                            <input
                                className="dt_12"
                                type="password"
                                name="conf_password"
                                placeholder="Confirm password"
                                value={values.conf_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ border: touched?.conf_password && errors?.conf_password ? "1px solid red" : "" }}
                            />
                            {errors?.conf_password && touched?.conf_password && <p className="d-flex text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>{errors?.conf_password}</p>}
                        </div>
                    </>
                )}

                <div className="field mb-4">
                    <button
                        className="login_button"
                        type="submit"
                        disabled={!isValid}
                    >{isEmailVerified ? "Reset Password" : "Verify"}</button>
                </div>
            </form>
        </>
    );
};

export default ForgetPassword;