import React from 'react';
import InputField from './InputField';

type FormGroupProps = {
    name: string;
    type?: string;
    placeholder?: string;
    label: string;
    value: string | boolean; // Handle both string and boolean values
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    touched?: boolean;
    readOnly?: boolean;
    maxLength?: number;
    colSize?: string;
};

const CustomInput = ({
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
    maxLength,
    colSize
}: FormGroupProps) => {
    return (
        <>
            <div className={colSize}>
                <InputField
                    label={label}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={typeof value === 'boolean' ? (value ? 'true' : 'false') : value} // Handle boolean values
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

export default CustomInput;
