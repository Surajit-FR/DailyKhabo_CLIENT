import { useFormik } from "formik";
import { addAddressValidationSchema } from "../helpers/FormValidation";
import { CustomHeadersType, FormValues, IAddress } from "../config/DataTypes.config";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateAddress } from "../services/slices/UserSlice";
import { Dispatch } from "redux";
import { addEditAddressInputConfigs } from "../components/input/InputConfig";
import CustomInput from "../components/input/CustomInput";

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
                                    {addEditAddressInputConfigs?.map((config, index) => (
                                        <CustomInput
                                            key={index}
                                            name={config?.name}
                                            label={config?.label}
                                            placeholder={config?.placeholder}
                                            type={config?.type}
                                            value={values[config?.name as keyof FormValues]}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={errors[config?.name as keyof FormValues]}
                                            touched={touched[config?.name as keyof FormValues]}
                                            readOnly={config?.readOnly}
                                            maxLength={config?.maxLength}
                                            colSize={config?.colSize}
                                        />
                                    ))}
                                </div>
                                <button type="submit" className="save_changes">Save Address</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditAddressModal;