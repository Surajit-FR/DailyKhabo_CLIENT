import { getImagUrl } from "../../../helpers/getImage";
import { IProduct } from "../../../types/product";

type ReviewAndDesc_props = {
    products_details_data: IProduct
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
                                products_details_data?.productKeyPoints &&
                                products_details_data?.productKeyPoints?.length > 0 &&
                                products_details_data?.productKeyPoints
                                    .filter(item => item)
                                    .map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DescriptionSection;