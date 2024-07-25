import { useFormik } from "formik";
import { addAddressValidationSchema } from "../helpers/FormValidation";
import { CustomHeadersType, IAddress } from "../config/DataTypes.config";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateAddress } from "../services/slices/UserSlice";
import { Dispatch } from "redux";

type EditAddressModal_props = {
    header: CustomHeadersType | undefined
}

const EditAddressModal = ({ header }: EditAddressModal_props): JSX.Element => {
    const { address_data } = useSelector((state: any) => state.userSlice);
    const dispatch: Dispatch<any> = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues, resetForm } = useFormik({
        initialValues: {
            phone: '',
            address: '',
            apartment: '',
            country: 'India',
            state: '',
            city: '',
            postalCode: '',
            primary: false,
        },
        validationSchema: addAddressValidationSchema,
        onSubmit: (values) => {
            const data: IAddress = {
                phone: values.phone.trim(),
                address: values.address.trim(),
                apartment: values.apartment.trim(),
                country: values.country.trim(),
                state: values.state.trim(),
                city: values.city.trim(),
                postalCode: values.postalCode.trim(),
                primary: values.primary,
            };
            dispatch(updateAddress({ address_id: address_data?._id, data, resetForm, header }));
        },
    });

    useEffect(() => {
        setValues({
            phone: address_data?.phone || "",
            address: address_data?.address || "",
            apartment: address_data?.apartment || "",
            country: address_data?.country || "",
            state: address_data?.state || "",
            city: address_data?.city || "",
            postalCode: address_data?.postalCode || "",
            primary: address_data?.primary || false,
        })
    }, [address_data, setValues]);


    return (
        <>
            <div className="modal fade" id="editAddressModal" tabIndex={-1} role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog det_center" role="document">
                    <div className="modal-content">
                        <div className="modal-header your_tre">
                            <h5 className="modal-title" id="exampleModalLabel">Your Addresses</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="username">
                                            <h5>Address*</h5>
                                            <input
                                                className="n_input"
                                                type="text"
                                                placeholder="Address"
                                                name='address'
                                                value={values?.address || ""}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ border: touched?.address && errors?.address ? "1px solid red" : "" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="username">
                                            <h5>Apartment</h5>
                                            <input
                                                className="n_input"
                                                type="text"
                                                placeholder="Apartment, suite, etc. (optional)"
                                                name='apartment'
                                                value={values?.apartment || ""}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="username">
                                            <h5>Phone*</h5>
                                            <input
                                                className="n_input"
                                                type="text"
                                                placeholder="Phone number"
                                                name='phone'
                                                value={values?.phone || ""}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ border: touched?.phone && errors?.phone ? "1px solid red" : "" }}
                                                maxLength={10}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="username">
                                            <h5>Country*</h5>
                                            <input
                                                className="n_input"
                                                type="text"
                                                placeholder="Country"
                                                name='country'
                                                value={values?.country || "India"}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ border: touched?.country && errors?.country ? "1px solid red" : "" }}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="username">
                                            <h5>State*</h5>
                                            <input
                                                className="n_input"
                                                type="text"
                                                placeholder="State"
                                                name='state'
                                                value={values?.state || ""}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ border: touched?.state && errors?.state ? "1px solid red" : "" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="username">
                                            <h5>City*</h5>
                                            <input
                                                className="n_input"
                                                type="text"
                                                placeholder="City"
                                                name='city'
                                                value={values?.city || ""}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ border: touched?.city && errors?.city ? "1px solid red" : "" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="username">
                                            <h5>Postal code*</h5>
                                            <input
                                                className="n_input"
                                                type="text"
                                                placeholder="Postal Code"
                                                name='postalCode'
                                                value={values?.postalCode || ""}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ border: touched?.postalCode && errors?.postalCode ? "1px solid red" : "" }}
                                                maxLength={6}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="save_changes">Update Address</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditAddressModal;