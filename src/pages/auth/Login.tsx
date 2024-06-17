import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { DecryptData } from "../../helpers/EncryptDecrypt";
import { useDispatch } from "react-redux";
import { loginValidationSchema } from "../../helpers/FormValidation";
import { clearAuthError, loginUser } from "../../services/slices/AuthSlice";
import { useFormik } from "formik";
import { useEffect } from "react";

type Login_props = {
    forgetPassword: boolean,
    setForgetPassword: Function,
}

const userCookie = Cookies.get("user");
const user = DecryptData(userCookie ? userCookie : "");

const Login = ({ forgetPassword, setForgetPassword }: Login_props): JSX.Element => {
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, resetForm } = useFormik({
        initialValues: {
            credential: user?.credential ? user?.credential : "",
            password: user?.password ? user?.password : "",
            user_type: "User",
            remember_me: user?.remember_me ? user?.remember_me : false
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            dispatch(loginUser({ data: values, navigate, resetForm }));
        }
    });

    useEffect(() => {
        return () => {
            dispatch(clearAuthError());
        };
    }, [dispatch]);

    const renderError = (error: any) => {
        if (typeof error === "string") {
            return <p className="d-flex text-danger" style={{ fontSize: "13px", fontWeight: "400" }}>{error}</p>;
        }
        return null;
    };

    return (
        <>
            <form className="login drt_log" onSubmit={handleSubmit}>

                {/* Email Input */}
                <div className="field mb-4">
                    <input
                        className="dt_12"
                        type="email"
                        placeholder="Email Address"
                        name='credential'
                        value={values?.credential || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ border: touched?.credential && errors?.credential ? "1px solid red" : "" }}
                    />
                    {touched?.credential && renderError(errors?.credential)}
                </div>

                {/* Password Input */}
                <div className="field mb-4">
                    <input
                        className="dt_12"
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={values?.password || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ border: touched?.password && errors?.password ? "1px solid red" : "" }}
                    />
                    {touched?.password && renderError(errors?.password)}
                </div>

                {/* Remember me Input */}
                <div className="field d-flex my-2">
                    <input
                        className="mb-2"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        name="remember_me"
                        checked={values?.remember_me}
                        onChange={handleChange}
                    />
                    <label htmlFor="flexSwitchCheckChecked">Remember Me</label>
                </div>

                <div className="pass-link">
                    <Link to="#" onClick={() => setForgetPassword(!forgetPassword)}>Forgot password?</Link>
                </div>

                <div className="field">
                    <button
                        type="submit"
                        className="login_button"
                        disabled={!isValid}
                    >Login</button>
                </div>
                <div className="signup-link mt-3">
                    Not a member? <Link to="#">Please Sign Up</Link>
                </div>
            </form>
        </>
    );
};

export default Login;