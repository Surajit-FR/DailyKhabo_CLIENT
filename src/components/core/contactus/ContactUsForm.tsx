const ContactUsForm = (): JSX.Element => {
    return (
        <>
            <div className="contact padding-tb">
                <div className="container">
                    <div className="section-wrapper row">
                        <div className="col-lg-8 col-12">
                            <div className="contact-part">
                                <div className="contact-title">
                                    <h4>Send Message us</h4>
                                </div>
                                <div className="contact-form d-flex flex-wrap justify-content-between">
                                    <input type="text" name="name" placeholder="Your Name" />
                                    <input type="email" name="email" placeholder="Your Email" />
                                    <input type="tel" name="tel" placeholder="Phone" />
                                    <input type="text" placeholder="Subject" />
                                    <textarea rows={7} placeholder="Enter Your Message"></textarea>
                                    <div className="gdprs">
                                        <label>
                                            <input type="checkbox" defaultChecked name="sameadr" />i’m not a robot
                                        </label>
                                        <img src="/assets/images/contact/icon/01.png" alt="contact" />
                                    </div>
                                    <input className="btn" type="submit" value="Submit Now" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="contact-info">
                                <h3>Quick Contact</h3>
                                <p>Continually productize compelling quality dome
                                    packed with all Elated Themes ently utilize
                                    website and creating pages corporate </p>
                                <ul className="contact-location">
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-phone-volume"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>+88130-589-745-6987</p>
                                            <p>+1655-456-523</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>Email@email.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>25/2 Lane2 Vokte Street Building Melborn City</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsForm;