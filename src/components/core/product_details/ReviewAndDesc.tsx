import { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewAndDesc = () => {
    const [activeBar, setActiveBar] = useState<string>("rev")
    return (
        <>
            <div className="review">
                <ul className="review-nav">
                    <li
                        className={`desc ${activeBar === "desc" ? "active" : ""}`}
                        data-target="description-show"
                        onClick={() => setActiveBar("desc")}
                    >Description</li>
                    <li
                        className={`rev ${activeBar === "rev" ? "active" : ""}`}
                        data-target="review-content-show"
                        onClick={() => setActiveBar("rev")}
                    >Reviews 4</li>
                </ul>
                <div className={`review-content ${activeBar === "rev" ? "review-content-show" : "description-show"} `}>
                    <div className="review-showing">
                        <ul className="content">
                            <li>
                                <div className="post-thumb">
                                    <img src="/assets/images/shop/01.png" alt="shop" />
                                </div>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <div className="posted-on">
                                            <Link to="#">Britney Doe</Link>
                                            <p>Posted on December 25, 2017 at 6:57 am</p>
                                        </div>
                                        <div className="rating">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>Enthusiast build innovativ initiatives before lonterm high-impact
                                            awesome theme seo psd porta monetize covalent leadership after
                                            without resource.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="post-thumb">
                                    <img src="/assets/images/shop/02.png" alt="shop" />
                                </div>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <div className="posted-on">
                                            <Link to="#">Jonathan Doe</Link>
                                            <p>Posted on December 25, 2017 at 6:57 am</p>
                                        </div>
                                        <div className="rating">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>Enthusiast build innovativ initiatives before lonterm high-impact
                                            awesome theme seo psd porta monetize covalent leadership after
                                            without resource.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="post-thumb">
                                    <img src="/assets/images/shop/03.png" alt="shop" />
                                </div>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <div className="posted-on">
                                            <Link to="#">Mack Zucky</Link>
                                            <p>Posted on December 25, 2017 at 6:57 am</p>
                                        </div>
                                        <div className="rating">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>Enthusiast build innovativ initiatives before lonterm high-impact
                                            awesome theme seo psd porta monetize covalent leadership after
                                            without resource.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="post-thumb">
                                    <img src="/assets/images/shop/04.png" alt="shop" />
                                </div>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <div className="posted-on">
                                            <Link to="#">Jordi Albae</Link>
                                            <p>Posted on December 25, 2017 at 6:57 am</p>
                                        </div>
                                        <div className="rating">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>Enthusiast build innovativ initiatives before lonterm high-impact
                                            awesome theme seo psd porta monetize covalent leadership after
                                            without resource.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="client-review">
                            <div className="review-form">
                                <div className="review-title">
                                    <h5>Add a Review</h5>
                                </div>
                                <form className="row">
                                    <div className="col-md-4 col-12">
                                        <input type="text" name="name" placeholder="Full Name" />
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <input type="text" name="email" placeholder="Email Adress" />
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="rating">
                                            <span className="rating-title">Your Rating : </span>
                                            <ul>
                                                <li>
                                                    <i className="far fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="far fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-12">
                                        <textarea rows={5} placeholder="Type Here Message"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="defult-btn" type="submit">Submit Review</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                        <div className="post-item">
                            <div className="post-thumb">
                                <img src="/assets/images/shop/03.jpg" alt="shop" />
                            </div>
                            <div className="post-content">
                                <ul>
                                    <li>
                                        Donec non est at libero vulputate rutrum.
                                    </li>
                                    <li>
                                        Morbi ornare lectus quis justo gravida semper.
                                    </li>
                                    <li>
                                        Pellentesque aliquet, sem eget laoreet ultrices.
                                    </li>
                                    <li>
                                        Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                                    </li>
                                    <li>
                                        Donec a neque libero.
                                    </li>
                                    <li>
                                        Pellentesque aliquet, sem eget laoreet ultrices.
                                    </li>
                                    <li>
                                        Morbi ornare lectus quis justo gravida semper..
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewAndDesc;