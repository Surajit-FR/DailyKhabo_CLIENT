import ReactPaginate from "react-paginate";
import { Pagination_Type } from "../config/DataTypes.config";

const Pagination = ({ pageCount, pageNumber, changePage }: Pagination_Type): JSX.Element => {
    return (
        <>
            <ul className="pagination d-flex flex-wrap m-0">
                <ReactPaginate
                    breakLabel='....'
                    previousLabel={<i className="fas fa-angle-double-left"></i>}
                    nextLabel={<i className="fas fa-angle-double-right"></i>}
                    pageCount={Math.ceil(pageCount)}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    pageClassName={"d-none d-md-block"}
                    pageLinkClassName={"d-none d-md-block"}
                    previousClassName={"prev"}
                    previousLinkClassName={"prev"}
                    nextClassName={"next"}
                    nextLinkClassName={"next"}
                    activeClassName={"active"}
                    forcePage={Math.ceil(pageNumber)}
                    renderOnZeroPageCount={null}
                />
            </ul>
        </>
    );
};

export default Pagination;