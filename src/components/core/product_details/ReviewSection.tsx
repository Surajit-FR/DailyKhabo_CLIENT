import React, { useState, useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewSection = (): JSX.Element => {
    const [rating, setRating] = useState<number | null>(null);
    const [hover, setHover] = useState<number | null>(null);

    // Memoize the MemoizedFaStar component along with starStyle
    const MemoizedFaStar = useMemo(() => {
        const starStyle = {
            transition: "color 200ms",
        };

        // Return the MemoizedFaStar component
        return React.memo((props: any) => (
            <FaStar
                style={starStyle}
                size={20}
                {...props}
            />
        ));
    }, []);

    // console.log(rating);

    return (
        <>
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
                                <input type="text" name="email" placeholder="Email Address" />
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="rating">
                                    <span className="rating-title">Your Rating : </span>
                                    <ul>
                                        {[...Array(5)].map((star, index) => {
                                            const ratingValue = index + 1;
                                            return (
                                                <li key={index}>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="rating"
                                                            value={ratingValue}
                                                            style={{ display: "none" }}
                                                            onClick={() => setRating(ratingValue)}
                                                        />
                                                        {/* Use MemoizedFaStar instead of FaStar */}
                                                        <MemoizedFaStar
                                                            color={ratingValue <= (hover ?? rating ?? 0) ? "#ffc107" : "#e4e5e9"}
                                                            onMouseEnter={() => setHover(ratingValue)}
                                                            onMouseLeave={() => setHover(null)}
                                                        />
                                                    </label>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <textarea rows={5} placeholder="Type Here Message"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="default-btn" type="submit">Submit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewSection;
