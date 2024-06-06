import Slider from "react-slick";
import { getImagUrl } from "../../../../helpers/getImage";

const ProductDetailsImageSlider = ({ products_details_data, nav2, sliderRef1, nav1, sliderRef2 }: any): JSX.Element => {
    return (
        <>
            <div className="slider-for">
                <Slider
                    asNavFor={nav2}
                    ref={sliderRef1}
                >
                    {
                        products_details_data?.data?.productImages?.map((item: any, index: number) => {
                            return (
                                <div className="thumb" key={index}>
                                    <img id="myimage8" src={getImagUrl(item)} alt="shopZoom" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

            <div className="slider-nav">
                <Slider
                    asNavFor={nav1}
                    ref={sliderRef2}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {
                        products_details_data?.data?.productImages?.slice(1)?.map((item: any, index: number) => {
                            return (
                                <div className="thumb" key={index}>
                                    <img src={getImagUrl(item)} alt="shop" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    );
};

export default ProductDetailsImageSlider;