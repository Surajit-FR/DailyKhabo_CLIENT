import { Link } from "react-router-dom";
import { Address, CustomHeadersType } from "../../../config/DataTypes.config";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

type AddressSection_props = {
    header: CustomHeadersType | undefined
}

const AddressSection = ({ header }: AddressSection_props): JSX.Element => {
    const { user_data } = useSelector((state: any) => state.authSlice);
    const [address, setAddress] = useState<Array<Address>>([]);

    useEffect(() => {
        setAddress(user_data?.address)
    }, [user_data?.address]);

    return (
        <>
            <div className="col-md-7 col-lg-7">
                <div className="proflies_box">
                    <h4>Saved Address</h4>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <button type="button" className="add_addres" data-toggle="modal"
                                data-target="#exampleModal">
                                <span>+</span>
                                Add Address
                            </button>
                        </div>
                        {
                            address?.length &&
                            address?.map((item) => {
                                return (
                                    <div className="col-md-6" key={item?._id}>
                                        <div
                                            className="addres_edit"
                                            style={item?.primary ? {
                                                backgroundColor: "#ddd",
                                                border: "2px solid #898989"
                                            } : {}}
                                        >
                                            {
                                                item?.primary && <h4>Primary address</h4>
                                            }
                                            <p>{item?.address}</p>
                                            <p>{item?.apartment}</p>
                                            <p>{item?.city},</p>
                                            <p>{item?.state},</p>
                                            <p>{item?.postalCode},</p>
                                            <p>{item?.country}</p>
                                            <ul className="pr_edits">
                                                <li>
                                                    <Link to="#">Edit</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Remove</Link>
                                                </li>
                                                {
                                                    !item?.primary &&
                                                    (<li>
                                                        <Link to="#">Set as Default</Link>
                                                    </li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div >
        </>
    );
};

export default AddressSection;