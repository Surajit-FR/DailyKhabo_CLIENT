import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrimaryAddress } from "../../../helpers/Formatter";
import { updateUser } from "../../../services/slices/UserSlice";
import { Dispatch } from "redux";
import { CustomHeaders } from "../../../types/common.";
import { Link } from "react-router-dom";

type UserInfo_props = {
    header: CustomHeaders | undefined
}

const UserInfo = ({ header }: UserInfo_props): JSX.Element => {
    const { user_data } = useSelector((state: any) => state.userSlice);
    const formattedAddress = user_data?.address ? formatPrimaryAddress(user_data.address) : '';
    const dispatch: Dispatch<any> = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        full_name: '',
        email: ''
    });

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveChanges = () => {
        const data = { ...user_data, ...formData };
        dispatch(updateUser({ data, header }));
        setIsEditing(false);
    };

    useEffect(() => {
        if (user_data) {
            setFormData({
                full_name: user_data.full_name || '',
                email: user_data.email || '',
            });
        }
    }, [user_data]);

    return (
        <>
            <div className="col-md-5 col-lg-5">
                <div className="proflies_box">
                    <div className="img_boxt">
                        <img src="/assets/images/portfolio/man.png" alt="" />
                    </div>
                    <div className="proflies_text1">
                        <h3>{user_data?.full_name}</h3>
                        <h5>{user_data?.email}</h5>
                        <h5>{formattedAddress}</h5>
                        <Link className="btn btn-success mb-2" to="/order-history">Orders</Link>
                    </div>
                    <h4 style={{ cursor: "pointer" }}>
                        Edit information
                        <i className="fa-solid fa-pen-to-square fa-sm mx-2" style={{ color: "#575757" }} onClick={handleEditClick}></i>
                    </h4>
                    {isEditing && (
                        <>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="username">
                                        <h5>Full Name</h5>
                                        <input
                                            className="n_input"
                                            type="text"
                                            name="full_name"
                                            value={formData?.full_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="username">
                                        <h5>Email Address</h5>
                                        <input
                                            className="n_input"
                                            type="email"
                                            name="email"
                                            value={formData?.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="save_changes mb-2"
                                onClick={handleSaveChanges}
                            >Save Changes</button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default UserInfo;