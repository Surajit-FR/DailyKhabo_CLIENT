import PageTopSection from "../../components/common/PageTopSection";
import AddAddressModal from "../../util/AddAddressModal";
import AddressSection from "../../components/core/profile/AddressSection";
import UserInfo from "../../components/core/profile/UserInfo";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useEffect } from "react";
import { getUserDetails } from "../../services/slices/UserSlice";
import EditAddressModal from "../../util/EditAddressModal";
import { CustomHeaders } from "../../types/common.";


type Profile_props = {
    header: CustomHeaders | undefined
}

const Profile = ({ header }: Profile_props): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(getUserDetails({ header }));
    }, [dispatch, header]);

    return (
        <>
            {/* PageHeader Section */}
            <PageTopSection pageName="Profile" />

            {/* AddAddress modal */}
            <AddAddressModal header={header} />

            {/* AddAddress modal */}
            <EditAddressModal header={header} />

            <div className="proflies_section">
                <div className="container">
                    <div className="row">
                        {/* UserInfo */}
                        <UserInfo header={header} />
                        {/* AddressSection */}
                        <AddressSection header={header} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;