import { ProductListType } from "../../../config/DataTypes.config";
import { getImagUrl } from "../../../helpers/getImage";

type ReviewAndDesc_props = {
    products_details_data: ProductListType
};

const DescriptionSection = ({ products_details_data }: ReviewAndDesc_props) => {
    return (
        <>
            <div className="description">
                <p>{products_details_data?.productDescription}</p>
                <div className="post-item">
                    <div className="post-thumb">
                        <img src={getImagUrl(products_details_data?.productImages[0])} alt="shop" />
                    </div>
                    <div className="post-content">
                        <ul>
                            {
                                products_details_data?.productKeyPoints?.map((item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DescriptionSection;