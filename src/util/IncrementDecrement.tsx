import { useState } from "react";

interface IncrementDecrement_props {
    initialValue: number;
}

const IncrementDecrement = ({ initialValue }: IncrementDecrement_props): JSX.Element => {
    const [value, setValue] = useState(initialValue);

    const decrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const increment = () => {
        setValue(value + 1);
    };

    return (
        <>
            <div className="cart-plus-minus">
                <div className="dec qtybutton" onClick={decrement}>-</div>
                <input className="cart-plus-minus-box" type="text" name="qtybutton" value={value} readOnly />
                <div className="inc qtybutton" onClick={increment}>+</div>
            </div>
        </>
    );
};

export default IncrementDecrement;