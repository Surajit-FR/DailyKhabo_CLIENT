import { Link } from "react-router-dom";

const BlogSection = (): JSX.Element => {
    return (
        <>
            <section id="blog" className="blog style-2 padding-tb">
                <div className="container">
                    <div className="row">
                        <div className="section-header w-100 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s">
                            <h2>Recent Blog</h2>
                            <h2><span>Best Milk Recipe You have Ever seen</span></h2>
                            <p>Continually productize compelling quality for packed with  Elated
                                Themes Setting up to website and it crating pages .</p>
                        </div>
                        <div className="section-wrapper row no-gutters justify-content-center">
                            <div className="col-lg-5">
                                <div className="blog-left wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                    <div className="post-item">
                                        <div className="post-inner">
                                            <div className="post-thumb">
                                                <Link to="blog-single.html"><img src="assets/images/blog/03.jpg" alt="blog" /></Link>
                                                <div className="post-content">
                                                    <h4><Link to="blog-single.html">The Only Ice Cream Recipe You'll Ever Need</Link></h4>
                                                    <div className="meta-post">
                                                        <img src="assets/images/blog/meta/01.png" alt="meta-post" />
                                                        <Link to="#" className="name">Sahjahan Sagor</Link>
                                                        <Link to="#" className="date">October 10, 2021 </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="blog-right">
                                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                        <div className="post-inner">
                                            <div className="post-thumb">
                                                <Link to="blog-single.html"><img src="assets/images/blog/04.jpg" alt="blog" /></Link>
                                                <div className="post-content">
                                                    <h4><Link to="blog-single.html">Tip for Making Dairy Free Milk at Home</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                        <div className="post-inner">
                                            <div className="post-thumb">
                                                <Link to="blog-single.html"><img src="assets/images/blog/05.jpg" alt="blog" /></Link>
                                                <div className="post-content">
                                                    <h4><Link to="blog-single.html">Natural Cheese Recipe for Your Family</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                        <div className="post-inner">
                                            <div className="post-thumb">
                                                <Link to="blog-single.html"><img src="assets/images/blog/06.jpg" alt="blog" /></Link>
                                                <div className="post-content">
                                                    <h4><Link to="blog-single.html">Natural Butter Recipe for Your Family</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                        <div className="post-inner">
                                            <div className="post-thumb">
                                                <Link to="blog-single.html"><img src="assets/images/blog/07.jpg" alt="blog" /></Link>
                                                <div className="post-content">
                                                    <h4><Link to="blog-single.html">Making Ghee Free Milk for Family</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogSection;