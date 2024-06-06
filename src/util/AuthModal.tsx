import { useState } from "react";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

const AuthModal = (): JSX.Element => {
    const [form, setForm] = useState<string>("login");

    return (
        <>
            <div className="modal fade frt_bod" id="exampleAuthModal" tabIndex={-1} role="dialog" aria-labelledby="exampleAuthModalLabel"
                aria-hidden="true">
                <div className="modal-dialog center_popup" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                            <ul className="tabs brt_tabs">
                                <li className={`tab-link ${form === "login" ? "active" : ""}`} data-tab="1" onClick={() => setForm("login")}>Login</li>
                                <li className={`tab-link ${form === "signup" ? "active" : ""}`} data-tab="2" onClick={() => setForm("signup")}>Signup</li>
                            </ul>

                            <div id="tab-1" className={`tab-content ${form === "login" ? "active" : ""}`}>
                                {/* Login Form */}
                                <Login />
                            </div>

                            <div id="tab-2" className={`tab-content ${form === "signup" ? "active" : ""}`}>
                                {/* Signup Form */}
                                <Signup />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthModal;