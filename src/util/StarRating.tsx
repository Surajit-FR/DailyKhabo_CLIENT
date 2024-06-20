import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
    rating: number | null;
    hoverRating?: number | null;
    readOnly?: boolean;
    showText: boolean;
    text?: string;
    starSize?: number;
    onRatingChange?: (rating: number) => void;
    onMouseEnter?: (hoverRating: number) => void;
    onMouseLeave?: () => void;
}

const StarRating = ({ rating, hoverRating, readOnly = false, showText, text = "Your rating", starSize = 20, onRatingChange, onMouseEnter, onMouseLeave }: StarRatingProps): JSX.Element => {
    const starStyle = {
        transition: "color 200ms",
    };

    const handleRatingChange = (value: number) => {
        if (onRatingChange && !readOnly) {
            onRatingChange(value);
        }
    };

    return (
        <>
            <b className="rating">
                {showText && <span className="rating-title mx-2 mb-1">{text}</span>}
                {[...Array(5)].map((_, index) => {
                    const starNumber = index + 1;
                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="rating"
                                value={starNumber}
                                style={{ display: "none" }}
                                onClick={() => handleRatingChange(starNumber)}
                            />
                            <FaStar
                                style={starStyle}
                                size={starSize}
                                color={starNumber <= (hoverRating ?? rating ?? 0) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => onMouseEnter && onMouseEnter(starNumber)}
                                onMouseLeave={() => onMouseLeave && onMouseLeave()}
                            />
                        </label>
                    );
                })}
            </b>
        </>
    );
};

export default StarRating;