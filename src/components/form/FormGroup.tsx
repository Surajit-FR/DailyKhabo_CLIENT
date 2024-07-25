import React from 'react';
import InputField from '../input/InputField';

type FormGroupProps = {
    name: string;
    type?: string;
    placeholder?: string;
    label: string;
    value: string | boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    touched?: boolean;
    readOnly?: boolean;
    maxLength?: number;
};

const FormGroup = ({
    name,
    type = 'text',
    placeholder,
    label,
    value,
    onChange,
    onBlur,
    error,
    touched,
    readOnly,
    maxLength
}: FormGroupProps) => {
    return (
        <>
            <div className="col-md-6">
                <InputField
                    label={label}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={typeof value === 'boolean' ? (value ? 'true' : 'false') : value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error}
                    touched={touched}
                    readOnly={readOnly}
                    maxLength={maxLength}
                />
            </div>
        </>
    );
};

export default FormGroup;
