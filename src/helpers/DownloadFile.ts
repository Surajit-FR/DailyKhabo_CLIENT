import axios from "axios";
import { showToast } from "./Toast";
import { REACT_APP_BASE_URL } from "../config/App.config";
import { FormValues } from "../types/formValues";

interface DownloadPdfParams {
    setLoading: (loading: boolean) => void;
    orderData: FormValues;
    _TOKEN: string;
};

// handleDownloadPdf helper func.
export const handleDownloadPdf = async ({ setLoading, orderData, _TOKEN }: DownloadPdfParams) => {
    setLoading(true);
    try {
        const requestData = {
            invoiceDetails: orderData
        };

        // Make a POST request to your backend API
        const response = await axios.post<Blob>(
            `${REACT_APP_BASE_URL}/user/api/generate/invoice-pdf`,
            requestData,
            {
                headers: { Authorization: `Bearer ${_TOKEN}` },
                responseType: 'blob'
            }
        );

        const blob = new Blob([response.data], { type: 'application/pdf' });

        // Generate a unique filename with timestamp
        const timestamp = new Date().toISOString().replace(/[-T:Z.]/g, '');
        const filename = `invoice_${timestamp}.pdf`;

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = filename;

        document.body.appendChild(a);
        a.click();

        // Clean up: remove the link and revoke the URL
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        showToast({
            message: 'Failed to download the PDF. Please try again.',
            type: 'error',
            durationTime: 3000,
            position: 'top-center'
        });
    } finally {
        setLoading(false);
    }
};

// handlePrintPdf helper func.
export const handlePrintPdf = async (invoiceDetails: any, _TOKEN: string) => {
    try {
        const requestData = {
            invoiceDetails
        };

        // Make a POST request to your backend API
        const response = await axios.post(`${REACT_APP_BASE_URL}/admin/api/generate/invoice-pdf`, requestData, {
            headers: { Authorization: `Bearer ${_TOKEN}` },
            responseType: 'blob'
        });

        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const newWindow = window.open(url, '_blank');

        if (newWindow) {
            newWindow.onload = () => {
                setTimeout(() => {
                    newWindow.print();
                }, 1000);
            };
        } else {
            alert('Please allow popups for this site to print the PDF.');
        }

        // Clean up: revoke the URL
        window.URL.revokeObjectURL(url);
    } catch (error) {
        showToast({ message: "Failed to print the PDF. Please try again.", type: 'error', durationTime: 3000, position: "top-center" });
    };
};