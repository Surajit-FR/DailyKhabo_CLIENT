import { Link } from "react-router-dom";

const Login = (): JSX.Element => {
    return (
        <>
            <form className="login drt_log">
                <div className="field">
                    <input className="dt_12" type="email" placeholder="Email Address" required />
                </div>
                <div className="field">
                    <input className="dt_12" type="password" placeholder="Password" required />
                </div>
                <div className="pass-link">
                    <Link to="#">Forgot password?</Link>
                </div>
                <div className="field">
                    <input className="login_button" type="submit" value="Login" />
                </div>
                <div className="signup-link mt-3">
                    Not a member? <Link to="#">Please Sign Up</Link>
                </div>
            </form>
        </>
    );
};

export default Login;