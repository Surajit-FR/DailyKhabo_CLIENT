import { Link } from "react-router-dom";

type PageTopSection_props = {
    pageName: string
}

const PageTopSection = ({ pageName }: PageTopSection_props): JSX.Element => {
    return (
        <>
            <section className="page-header padding-tb page-header-bg-1">
                <div className="container">
                    <div className="page-header-item d-flex align-items-center justify-content-center">
                        <div className="post-content">
                            <h3>{pageName}</h3>
                            <div className="breadcamp">
                                <ul className="d-flex flex-wrap justify-content-center align-items-center">
                                    <li><Link to="/home">Home</Link> </li>
                                    <li><Link to="#" className="active">{pageName}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default PageTopSection;