import { Link } from 'react-router-dom';

const BlogRightColumn = (): JSX.Element => {
    return (
        <>
            <div className="col-lg-4 sticky-widget">
                <div className="sidebar-widget">
                    <div className="widget-search">
                        <h4>Search Keyword</h4>
                        <form action="action">
                            <input type="text" placeholder="Search Here..." name="s" />
                            <button type="submit"><i className="flaticon-magnifying-glass"></i></button>
                        </form>
                    </div>

                    <div className="widget-rec-post">
                        <h4>Most Popular Posts</h4>
                        <ul className="recent-post">
                            <li>
                                <div className="rec-content">
                                    <h6><Link to="#">Fouate Revunry And Mare Fnger Tache Fanny</Link></h6>
                                    <span> 11 October 2018</span>
                                </div>
                                <div className="rec-thumb">
                                    <Link to="#"><img src="/assets/images/blog/rec/01.jpg" alt="blog" /></Link>
                                </div>
                            </li>
                            <li>
                                <div className="rec-content">
                                    <h6><Link to="#">Fouate Revunry And Mare Fnger Tache Fanny</Link></h6>
                                    <span> 11 October 2018</span>
                                </div>
                                <div className="rec-thumb">
                                    <Link to="#"><img src="/assets/images/blog/rec/02.jpg" alt="blog" /></Link>
                                </div>
                            </li>
                            <li>
                                <div className="rec-content">
                                    <h6><Link to="#">Fouate Revunry And Mare Fnger Tache Fanny</Link></h6>
                                    <span> 11 October 2018</span>
                                </div>
                                <div className="rec-thumb">
                                    <Link to="#"><img src="/assets/images/blog/rec/03.jpg" alt="blog" /></Link>
                                </div>
                            </li>
                            <li>
                                <div className="rec-content">
                                    <h6><Link to="#">Fouate Revunry And Mare Fnger Tache Fanny</Link></h6>
                                    <span> 04 October 2018</span>
                                </div>
                                <div className="rec-thumb">
                                    <Link to="#"><img src="/assets/images/blog/rec/04.jpg" alt="blog" /></Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="widget-instagram">
                        <h4> Instagram</h4>
                        <ul>
                            <li><Link to="#"><img src="/assets/images/blog/ins/01.jpg" alt="instragram" /></Link></li>
                            <li><Link to="#"><img src="/assets/images/blog/ins/02.jpg" alt="instragram" /></Link></li>
                            <li><Link to="#"><img src="/assets/images/blog/ins/03.jpg" alt="instragram" /></Link></li>
                            <li><Link to="#"><img src="/assets/images/blog/ins/04.jpg" alt="instragram" /></Link></li>
                            <li><Link to="#"><img src="/assets/images/blog/ins/05.jpg" alt="instragram" /></Link></li>
                            <li><Link to="#"><img src="/assets/images/blog/ins/06.jpg" alt="instragram" /></Link></li>
                            <li><Link to="#"><img src="/assets/images/blog/ins/07.jpg" alt="instragram" /></Link></li>
                            <li><Link to="#"><img src="/assets/images/blog/ins/08.jpg" alt="instragram" /></Link></li>
                            <li><Link to="#"><img src="/assets/images/blog/ins/09.jpg" alt="instragram" /></Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BlogRightColumn;