import { useState } from 'react';
import { ProductListType } from '../../../config/DataTypes.config';
import DescriptionSection from './DescriptionSection';
import ReviewSection from './ReviewSection';

type ReviewAndDesc_props = {
    products_details_data: ProductListType
};

const ReviewAndDesc = ({ products_details_data }: ReviewAndDesc_props) => {
    const [activeBar, setActiveBar] = useState<string>("rev")
    return (
        <>
            <div className="review">
                <ul className="review-nav">
                    <li
                        className={`desc ${activeBar === "desc" ? "active" : ""}`}
                        data-target="description-show"
                        onClick={() => setActiveBar("desc")}
                    >Description</li>
                    <li
                        className={`rev ${activeBar === "rev" ? "active" : ""}`}
                        data-target="review-content-show"
                        onClick={() => setActiveBar("rev")}
                    >Reviews 4</li>
                </ul>
                <div className={`review-content ${activeBar === "rev" ? "review-content-show" : "description-show"} `}>
                    {/* Review section */}
                    <ReviewSection />

                    {/* Description section */}
                    <DescriptionSection products_details_data={products_details_data} />
                </div>
            </div>
        </>
    );
};

export default ReviewAndDesc;