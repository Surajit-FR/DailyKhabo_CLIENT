import { ReviewListType } from "../config/DataTypes.config";

// formatDate func.
export const formatDate = (isoDateString: string | number | Date, type: string) => {
    const date = new Date(isoDateString);

    // Date options for formatting
    const dateOptions: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    // Time options for formatting
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };

    // Format date part
    const formattedDate = date.toLocaleDateString('en-US', dateOptions);

    // Format time part
    const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

    if (type === "date") {
        return formattedDate
    } else {
        return formattedTime
    }
};

// getAverageRating func.
export const getAverageRating = (reviewsData: Array<ReviewListType> | undefined): number => {
    if (!reviewsData || reviewsData?.length === 0) return 0;

    const sumOfRatings = reviewsData?.reduce((sum, review) => sum + review?.rating, 0);
    const averageRating = sumOfRatings / reviewsData?.length;

    return Math.ceil(averageRating);
};