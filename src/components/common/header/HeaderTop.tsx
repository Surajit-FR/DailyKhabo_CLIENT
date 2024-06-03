import { Link } from 'react-router-dom';

const HeaderTop = (): JSX.Element => {
    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="htop-area row">
                        <div className="htop-left">
                            <ul className="htop-information">
                                <li><i className="far fa-envelope"></i> email@gmail.com</li>
                                <li><i className="fas fa-phone-volume"></i> +88 130 589 745 6987</li>
                            </ul>
                        </div>
                        <div className="htop-right">
                            <ul>
                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-behance"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-vimeo-v"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;