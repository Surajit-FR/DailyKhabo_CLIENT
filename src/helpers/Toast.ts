// utils/toast.ts
import toast from "react-hot-toast";

type ToastOptions = {
    message: string;
    type: 'success' | 'error';
    durationTime: number;
};

export const showToast = ({ message, type, durationTime }: ToastOptions) => {
    const options = {
        duration: durationTime,
        style: {
            color: "#000",
            background: type === 'success' ? "#0f0" : "#fff", // Green for success, white for error
            border: `1px solid ${type === 'success' ? "#0f0" : "#f00"}`, // Green for success, white for error
        },
        iconTheme: {
            primary: type === 'success' ? "#0f0" : "#f00", // Green icon for success, red for error
            secondary: "#fff"
        }
    };

    if (type === 'success') {
        toast.success(message, options);
    } else {
        toast.error(message, options);
    }
};