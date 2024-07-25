import { Link } from "react-router-dom";
import { Address, CustomHeadersType } from "../../../config/DataTypes.config";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { deleteAddress, getAddress, updateAddress } from "../../../services/slices/UserSlice";

type AddressSection_props = {
    header: CustomHeadersType | undefined
}

const AddressSection = ({ header }: AddressSection_props): JSX.Element => {
    const { user_data } = useSelector((state: any) => state.userSlice);
    const [address, setAddress] = useState<Array<Address>>([]);
    const dispatch: Dispatch<any> = useDispatch();

    // handleDeleteAddress func.
    const handleDeleteAddress = (address_id: string) => {
        dispatch(deleteAddress({ address_id, header }))
    };

    // handleDefaultAddress func.
    const handleDefaultAddress = (address_id: string, address: Address) => {
        const updatedAddressData: Address = {
            ...address,
            primary: true,
        };
        dispatch(updateAddress({ address_id, data: updatedAddressData, header }));
    };

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
                                data-target="#addAddressModal">
                                <span>+</span>
                                Add Address
                            </button>
                        </div>
                        {
                            address?.length &&
                            address?.map((item: Address) => {
                                return (
                                    <div className="col-md-6" key={item?._id}>
                                        <div
                                            className="addres_edit"
                                            style={item?.primary ? {
                                                backgroundColor: "#ddd",
                                                border: "2px solid #898989",
                                                height: "253px"
                                            } : { height: "253px" }}
                                        >
                                            {
                                                item?.primary && <h4>Primary address</h4>
                                            }
                                            <p>{item?.address},</p>
                                            <p>{item?.apartment},</p>
                                            <p>{item?.state}, {item?.city}, {item?.postalCode},</p>
                                            <p>{item?.country}</p>
                                            <p>Phone number: {item?.phone ? item?.phone : "N/A"}</p>
                                            <ul className="pr_edits">
                                                <li>
                                                    <Link
                                                        to="#"
                                                        data-toggle="modal"
                                                        data-target="#editAddressModal"
                                                        onClick={() => dispatch(getAddress({ address_id: item?._id, header }))}
                                                    >Edit</Link>
                                                </li>
                                                <li>
                                                    <Link to="#" onClick={() => handleDeleteAddress(item?._id)}>Remove</Link>
                                                </li>
                                                {
                                                    !item?.primary &&
                                                    <li>
                                                        <Link
                                                            to="#"
                                                            onClick={() => handleDefaultAddress(item?._id, item)}
                                                        >Set as Default</Link>
                                                    </li>
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