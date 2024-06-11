import { Link } from "react-router-dom";
import { CategoryResponse } from "../../../config/DataTypes.config";
import { getImagUrl } from "../../../helpers/getImage";

type CategorySection_props = {
    categoryData: CategoryResponse[];
};

const AboutSection = ({ categoryData }: CategorySection_props): JSX.Element => {

    return (
        <>
            <section className="about section-padding">
                <div className="container p-xl-0">
                    <div className="section-wrapper row justify-content-center">
                        {
                            categoryData && categoryData?.map((item, index) => {
                                return (
                                    <div className="col-xl-4 col-sm-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" key={index}>
                                        <div className="post-item-inner text-center">
                                            <div className="post-thumb">
                                                <img src={getImagUrl(item?.categoryImage)} alt="about" />
                                            </div>
                                            <div className="post-content">
                                                <div className="title">
                                                    <h4>{item?.category_name}</h4>
                                                </div>
                                                <Link to={`/product/${item?.category_name}`} className="btn btn-m-t">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;