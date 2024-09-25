const MapSection = (): JSX.Element => {
    return (
        <>
            <div className="container">
                <iframe
                    className="map_box"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14971.04290738369!2d88.34760191605323!3d22.572646232421368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277122e58cdd1%3A0x1f38c7b46b156cfd!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sin!4v1714483962644!5m2!1sen!2sin"
                    style={{ border: "0" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map of Kolkata, West Bengal, India"
                ></iframe>
            </div>
        </>
    );
};

export default MapSection;