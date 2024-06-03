const Search = (): JSX.Element => {
    return (
        <>
            <div className="search-area">
                <div className="search-input">
                    <div className="search-close">
                        <span></span>
                        <span></span>
                    </div>
                    <form>
                        <input type="text" name="text" placeholder="*Search Here" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Search;