import { REACT_APP_BASE_URL } from "../config/App.config";

export const getImagUrl = (url: string | undefined): string => {
    const subStr = "blob:";
    if (!url?.includes(subStr)) {
        const imgUrl = `${REACT_APP_BASE_URL}${url}`;
        return imgUrl;
    }
    return url;
};