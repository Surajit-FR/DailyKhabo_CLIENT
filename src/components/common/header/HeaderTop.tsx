import { Link } from 'react-router-dom';

const HeaderTop = (): JSX.Element => {
    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="htop-area row">
                        <div className="htop-left">
                            <ul className="htop-information">
                                <li><i className="far fa-envelope mr-2"></i>info@dailykhaoghee.com</li>
                                <li><i className="fas fa-phone-volume mr-2"></i>+917980645565</li>
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