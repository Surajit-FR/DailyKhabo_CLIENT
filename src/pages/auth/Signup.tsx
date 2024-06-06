const Signup = (): JSX.Element => {
    return (
        <>
            <form className="signup drt_log">
                <div className="field">
                    <input className="dt_12" type="text" placeholder="Name" required />
                </div>
                <div className="field">
                    <input className="dt_12" type="email" placeholder="Email Address" required />
                </div>
                <div className="field">
                    <input className="dt_12" type="password" placeholder="Password" required />
                </div>
                <div className="field">
                    <input className="dt_12" type="password" placeholder="Confirm password" required />
                </div>
                <div className="field">
                    <input className="login_button" type="submit" value="Signup" />
                </div>
            </form>
        </>
    );
};

export default Signup;