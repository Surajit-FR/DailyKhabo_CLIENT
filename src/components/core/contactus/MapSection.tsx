const MapSection = (): JSX.Element => {
    return (
        <>
            <div className="container">
                <iframe
                    className="map_box"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805254.2961029034!2d143.80469367170494!3d-37.96488505850255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1714483962644!5m2!1sen!2sin"
                    style={{ border: "0" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map of Melbourne, VIC, Australia"
                ></iframe>
            </div>
        </>
    );
};

export default MapSection;