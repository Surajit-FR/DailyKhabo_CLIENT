import { useFormik } from 'formik';
import { addAddressValidationSchema } from '../helpers/FormValidation';
import { CustomHeadersType, FormValues, IAddress } from '../config/DataTypes.config';
import { addAddress } from '../services/slices/UserSlice';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { addEditAddressInputConfigs } from '../components/input/InputConfig';
import CustomInput from '../components/input/CustomInput';

type AddAddressModalProps = {
    header: CustomHeadersType | undefined;
};

const AddAddressModal = ({ header }: AddAddressModalProps): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik<FormValues>({
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
            dispatch(addAddress({ data, resetForm, header }));
        },
    });

    return (
        <>
            <div className="modal fade" id="addAddressModal" tabIndex={-1} role="dialog"
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

export default AddAddressModal;