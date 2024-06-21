import React, { useState } from "react";

const Search = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const url = `/product/All%20Products?searchQuery=${encodeURIComponent(searchQuery)}`;
        window.location.href = url;
    };

    return (
        <>
            <div className="search-area">
                <div className="search-input">
                    <div className="search-close">
                        <span></span>
                        <span></span>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            name="search"
                            placeholder="*Search Here"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Search;