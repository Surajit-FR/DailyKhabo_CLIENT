import Product from './Product';
import Pagination from '../../../../util/Pagination';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { CustomHeaders } from '../../../../types/common.';
import { ProductResponse } from '../../../../types/product';
import { CategoryResponse } from '../../../../types/category';

type AllProducts_props = {
    _TOKEN: any,
    header: CustomHeaders | undefined,
    pageName: string | undefined,
    productData: ProductResponse[],
    categoryData: CategoryResponse[],
    pageCount: number,
    pageNumber: number,
    changePage: (selected: { selected: number }) => void,
    setCategoryID: Function,
    dispatch: Dispatch<any>,
}

const AllProducts = ({ _TOKEN, header, pageName, categoryData, productData, pageCount, pageNumber, changePage, setCategoryID, dispatch }: AllProducts_props): JSX.Element => {
    const { products_data } = useSelector((state: any) => state.utilitySlice);
    const matchedCategory = categoryData?.find(category => category?.category_name === pageName);

    const categoryID = matchedCategory?._id;

    useEffect(() => {
        setCategoryID(categoryID);
    }, [categoryID, setCategoryID]);

    return (
        <>
            <section className="shop-page padding-tb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 sticky-widget">
                            <div className="shop-title d-flex flex-wrap justify-content-between">
                                <p>Showing {products_data?.showing?.startIndex} - {products_data?.showing?.endIndex} of {products_data?.totalItems} Results</p>
                            </div>

                            <div className="shop-product-wrap grid row">
                                {
                                    productData && productData?.map((item: any, index: any) => {
                                        return (
                                            <Product
                                                key={index}
                                                item={item}
                                                header={header}
                                                _TOKEN={_TOKEN}
                                                dispatch={dispatch}
                                            />
                                        )
                                    })
                                }
                            </div>

                            <div className="pagination-area d-flex flex-wrap justify-content-center">
                                <Pagination
                                    pageCount={pageCount}
                                    pageNumber={pageNumber}
                                    changePage={changePage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllProducts;