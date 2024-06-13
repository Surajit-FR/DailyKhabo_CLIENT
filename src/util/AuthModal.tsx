import { useState } from "react";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgetPassword from "../pages/auth/ForgetPassword";

const AuthModal = (): JSX.Element => {
    const [form, setForm] = useState<string>("login");
    const [forgetPassword, setForgetPassword] = useState<boolean>(false);

    return (
        <>
            <div className="modal fade frt_bod" id="exampleAuthModal" tabIndex={-1} role="dialog" aria-labelledby="exampleAuthModalLabel"
                aria-hidden="true">
                <div className="modal-dialog center_popup" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeAuthModalButton" onClick={() => setForgetPassword(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body" style={{ display: forgetPassword ? "none" : "" }}>
                            <ul className="tabs brt_tabs">
                                <li className={`tab-link ${form === "login" ? "active" : ""}`} data-tab="1" onClick={() => setForm("login")}>Login</li>
                                <li className={`tab-link ${form === "signup" ? "active" : ""}`} data-tab="2" onClick={() => setForm("signup")}>Signup</li>
                            </ul>

                            <div id="tab-1" className={`tab-content ${form === "login" ? "active" : ""}`}>
                                {/* Login Form */}
                                <Login
                                    forgetPassword={forgetPassword}
                                    setForgetPassword={setForgetPassword}
                                />
                            </div>

                            <div id="tab-2" className={`tab-content ${form === "signup" ? "active" : ""}`}>
                                {/* Signup Form */}
                                <Signup />
                            </div>
                        </div>

                        <div className="modal-body" style={{ display: forgetPassword ? "" : "none" }}>
                            <h4 className="text-center" style={{ color: "#5d9913", fontFamily: "roboto" }}>Forget Password</h4>

                            <div id="tab-1" className={`tab-content ${form === "login" ? "active" : ""}`}>
                                {/* ForgetPassword Form */}
                                <ForgetPassword />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthModal;