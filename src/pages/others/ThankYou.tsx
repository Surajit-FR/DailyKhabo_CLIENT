import { useNavigate } from "react-router-dom";
import PageTopSection from "../../components/common/PageTopSection";

const ThankYou = (): JSX.Element => {
    const navigate: any = useNavigate();

    return (
        <>
            {/* PageHeader Section */}
            <PageTopSection pageName="Thank You" />

            <div className="proflies_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-8">
                            <div className="wrapper-1">
                                <div className="wrapper-2">
                                    <h1>Thank you !</h1>
                                    <p>Thanks for purchasing our products.</p>
                                    <button className="go-home btn btn-m-t" onClick={() => navigate('/')}>
                                        go home
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThankYou;