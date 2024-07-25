import React from 'react';

type InputFieldProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    touched?: boolean;
    readOnly?: boolean;
    maxLength?: number;
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    touched,
    readOnly = false,
    maxLength
}) => {
    return (
        <>
            <div className='username'>
                <h5>{label}</h5>
                {touched && error && <div className="error">{error}</div>}
                <input
                    className="n_input"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    style={{ border: touched && error ? '1px solid red' : '' }}
                    readOnly={readOnly}
                    maxLength={maxLength}
                />
            </div>
        </>
    );
};

export default InputField;
