const AddAddressModal = (): JSX.Element => {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog det_center" role="document">
                    <div className="modal-content">
                        <div className="modal-header your_tre">
                            <h5 className="modal-title" id="exampleModalLabel">Your Addresses</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="username">
                                        <h5>Address</h5>
                                        <input className="n_input" type="text" name="text" placeholder="Address" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="username">
                                        <h5>Apartment</h5>
                                        <input className="n_input" type="text" name="text" placeholder="Apartment, suite, etc. (optional)" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="username">
                                        <h5>Country</h5>
                                        <input className="n_input" type="text" name="text" placeholder="Country" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="username">
                                        <h5>State</h5>
                                        <input className="n_input" type="text" name="text" placeholder="State" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="username">
                                        <h5>City</h5>
                                        <input className="n_input" type="text" name="text" placeholder="City" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="username">
                                        <h5>Postal code</h5>
                                        <input className="n_input" type="text" name="text" placeholder="Postal Code" />
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="save_changes">Save Address</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddAddressModal;