import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerValidationSchema } from "../../helpers/FormValidation";
import { clearAuthError, registerUser } from "../../services/slices/AuthSlice";
import { useFormik, FormikProps } from 'formik';
import { useEffect } from "react";

interface SignupFormValues {
    full_name: string;
    email: string;
    password: string;
    conf_password: string;
    role: string;
}

const Signup = (): JSX.Element => {
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, resetForm }: FormikProps<SignupFormValues> = useFormik<SignupFormValues>({
        initialValues: {
            full_name: "",
            email: "",
            password: "",
            conf_password: "",
            role: "User",
        },
        validationSchema: registerValidationSchema,
        onSubmit: (values) => {
            const data = {
                full_name: values.full_name,
                email: values.email,
                password: values.password,
                role: values.role,
            }
            dispatch(registerUser({ data, navigate, resetForm }));
        }
    });

    useEffect(() => {
        return () => {
            dispatch(clearAuthError());
        };
    }, [dispatch]);

    return (
        <form className="signup drt_log" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="field mb-4">
                <input
                    className="dt_12"
                    type="text"
                    name="full_name"
                    placeholder="Name"
                    value={values.full_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ border: touched?.full_name && errors?.full_name ? "1px solid red" : "" }}
                />
                {errors.full_name && touched.full_name && <p className="d-flex text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>{errors.full_name}</p>}
            </div>

            {/* Email Address */}
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
                {errors.email && touched.email && <p className="d-flex text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>{errors.email}</p>}
            </div>

            {/* Password */}
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
                {errors.password && touched.password && <p className="d-flex text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>{errors.password}</p>}
            </div>

            {/* Confirm password */}
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
                {errors.conf_password && touched.conf_password && <p className="d-flex text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>{errors.conf_password}</p>}
            </div>

            {/* Signup Button */}
            <div className="field mb-4">
                <button
                    className="login_button"
                    type="submit"
                    disabled={!isValid}
                >Signup</button>
            </div>
        </form>
    );
};

export default Signup;