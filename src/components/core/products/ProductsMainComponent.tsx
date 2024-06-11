import { useDispatch, useSelector } from "react-redux";
import PageTopSection from "../../common/PageTopSection";
import AllProducts from "./product_content/AllProducts";
import { Dispatch } from "redux";
import { useEffect, useState } from "react";
import { CategoryResponse, ProductResponse } from "../../../config/DataTypes.config";
import { getAllCategory, getAllProduct } from "../../../services/slices/UtilitySlice";
import { REACT_APP_PRODUCT_PER_PAGE } from "../../../config/App.config";
import { useParams } from "react-router-dom";

const ProductsMainComponent = (): JSX.Element => {
    const { category_name } = useParams();
    const { products_data, category_data } = useSelector((state: any) => state.utilitySlice);
    const dispatch: Dispatch<any> = useDispatch();

    const [productData, setProductData] = useState<ProductResponse[]>([]);
    const [categoryData, setCategoryData] = useState<CategoryResponse[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [categoryID, setCategoryID] = useState<string>("");

    // Pagination
    const dataPerPage = REACT_APP_PRODUCT_PER_PAGE;
    const pageCount = products_data?.totalPages;
    
    // Extract category_id from either params or child component 
    const matchedCategory = categoryData?.find(category => category?.category_name === category_name);
    const category_id = matchedCategory?._id;

    const _CATEGORYID = category_id ? category_id : categoryID ? categoryID : "";

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        dispatch(getAllProduct({
            page: (pageNumber + 1),
            pageSize: dataPerPage,
            search: "",
            category: _CATEGORYID
        }));
        dispatch(getAllCategory({
            page: 0,
            pageSize: 0,
        }));
    }, [dispatch, dataPerPage, pageNumber, _CATEGORYID]);

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
                productData={productData}
                categoryData={categoryData}
                pageCount={pageCount}
                pageNumber={pageNumber}
                changePage={changePage}
                setCategoryID={setCategoryID}
            />
        </>
    );
};

export default ProductsMainComponent;