import { useState, useEffect, useRef, useCallback } from "react";
import { updateItemQuantity } from "../helpers/CartFunctions";
import { Dispatch } from "redux";
import { CustomHeaders } from "../types/common.";

interface IncrementDecrementProps {
    initialValue: number;
    product_id: string | undefined;
    dispatch: Dispatch<any>;
    header: CustomHeaders | undefined;
    pageName: string;
    _TOKEN: any;
}

const IncrementDecrement = ({ _TOKEN, initialValue, product_id, dispatch, header, pageName }: IncrementDecrementProps): JSX.Element => {
    const [value, setValue] = useState<number>(initialValue);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isInitialRender = useRef(true); // Track initial render

    const debounceDelay = 500; // Adjust debounce delay as needed

    const debouncedUpdate = useCallback((newQuantity: number) => {
        if (timeoutRef?.current) {
            clearTimeout(timeoutRef?.current);
        }
        timeoutRef.current = setTimeout(() => {
            if (product_id) {
                if (_TOKEN) {
                    updateItemQuantity({ product: product_id, cart_quantity: newQuantity, dispatch, header });
                } else {
                    updateItemQuantity({ product: product_id, cart_quantity: newQuantity, dispatch });
                }
            }
        }, debounceDelay);
    }, [dispatch, header, product_id, _TOKEN]);

    useEffect(() => {
        if (isInitialRender.current) {
            // Skip the first render
            isInitialRender.current = false;
            return;
        }
        debouncedUpdate(value);
        return () => {
            if (timeoutRef?.current) {
                clearTimeout(timeoutRef?.current);
            }
        };
    }, [value, debouncedUpdate]); // Trigger effect only when value changes

    const decrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const increment = () => {
        setValue(value + 1);
    };

    return (
        <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={decrement}>-</div>
            <input className="cart-plus-minus-box" type="text" name="qtybutton" value={value} readOnly />
            <div className="inc qtybutton" onClick={increment}>+</div>
        </div>
    );
};

export default IncrementDecrement;