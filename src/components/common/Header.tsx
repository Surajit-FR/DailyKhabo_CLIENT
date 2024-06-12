import { Dispatch } from "redux";
import AuthModal from "../../util/AuthModal";
import HeaderBottom from "./header/HeaderBottom";
import HeaderTop from "./header/HeaderTop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { logoutUser } from "../../services/slices/AuthSlice";
import { showToast } from "../../helpers/Toast";

const Header = (): JSX.Element => {
    const token: string | null = window.localStorage.getItem("token");
    const _TOKEN = JSON.parse(token ?? 'null');

    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        if (_TOKEN) {
            const decodedJwt = jwtDecode(_TOKEN);
            const isExpired = decodedJwt?.exp ? decodedJwt.exp < Date.now() / 1000 : false;
            if (isExpired) {
                dispatch(logoutUser());
                showToast({ message: "Session Expired. You've been logged out. Please signin again.", type: 'error', durationTime: 4000, position: "top-center" });
            }
        }
    }, [dispatch, _TOKEN]);

    return (
        <>
            {/* <!-- header section start here --> */}
            <header className="header-section style-2 d-none d-lg-block">
                {/* Header Top */}
                <HeaderTop />

                {/* Header Bottom */}
                <HeaderBottom />
            </header>
            {/* <!-- header section ending here --> */}

            {/* Auth modal */}
            <AuthModal />
        </>
    );
};

export default Header;