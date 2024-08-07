import { useDispatch, useSelector } from "react-redux";
import PageTopSection from "../../common/PageTopSection";
import AllProducts from "./product_content/AllProducts";
import { Dispatch } from "redux";
import { useEffect, useState } from "react";
import { getAllCategory, getAllProduct } from "../../../services/slices/UtilitySlice";
import { REACT_APP_PRODUCT_PER_PAGE } from "../../../config/App.config";
import { useLocation, useParams } from "react-router-dom";
import { CustomHeaders } from "../../../types/common.";
import { ProductResponse } from "../../../types/product";
import { CategoryResponse } from "../../../types/category";

type ProductsMainComponent_props = {
    _TOKEN: any,
    header: CustomHeaders | undefined
}

const ProductsMainComponent = ({ _TOKEN, header }: ProductsMainComponent_props): JSX.Element => {
    const { category_name } = useParams<{ category_name: string }>();
    const { products_data, category_data } = useSelector((state: any) => state.utilitySlice);
    const location = useLocation();
    const dispatch: Dispatch<any> = useDispatch();

    const [productData, setProductData] = useState<ProductResponse[]>([]);
    const [categoryData, setCategoryData] = useState<CategoryResponse[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [categoryID, setCategoryID] = useState<string>("");

    // Pagination
    const dataPerPage = REACT_APP_PRODUCT_PER_PAGE;
    const pageCount = products_data?.totalPages;

    // Extracting searchQuery from location
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('searchQuery') || '';

    // Extract category_id from either params or child component 
    const matchedCategory = categoryData?.find(category => category?.category_name === category_name);
    const category_id = matchedCategory?._id;

    const _CATEGORYID = category_id ? category_id : categoryID;

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        dispatch(getAllProduct({
            page: (pageNumber + 1),
            pageSize: dataPerPage,
            searchQuery: searchQuery || "",
            category: _CATEGORYID || ""
        }));
        dispatch(getAllCategory({
            page: 0,
            pageSize: 0,
        }));
    }, [dispatch, dataPerPage, pageNumber, searchQuery, _CATEGORYID]);

    useEffect(() => {
        setProductData(products_data?.data);
        setCategoryData(category_data?.data);
    }, [products_data, category_data]);

    return (
        <>
            {/* PageHeader Section */}
            <PageTopSection pageName={category_name} />

            {/* AllProducts */}
            <AllProducts
                pageName={category_name}
                dispatch={dispatch}
                productData={productData}
                categoryData={categoryData}
                pageCount={pageCount}
                pageNumber={pageNumber}
                changePage={changePage}
                setCategoryID={setCategoryID}
                _TOKEN={_TOKEN}
                header={header}
            />
        </>
    );
};

export default ProductsMainComponent;