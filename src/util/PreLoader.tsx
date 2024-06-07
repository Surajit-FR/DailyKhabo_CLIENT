const PreLoader = ({ loading }: { loading: boolean }): JSX.Element => {
    return (
        <>
            {/* <!--- PRELOADER-----> */}
            {loading && (
                <div className="page-loader">
                    <div className="daily_box_loader">
                        <div className="spinner">
                            <img src="/assets/images/logo/foterlogo.png" alt="" />
                        </div>
                        <div className="daily_khao">Daily Khao</div>
                    </div>
                </div >
            )}
        </>
    );
};

export default PreLoader;