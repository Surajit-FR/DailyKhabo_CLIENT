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
export const getAverageRating = (reviewsData: Array<ReviewListType>) => {
    let sumOfRatings = 0;
    reviewsData?.forEach(review => {
        sumOfRatings += review.rating;
    });

    const averageRating = Math.ceil(sumOfRatings / reviewsData?.length);
    return averageRating;
}