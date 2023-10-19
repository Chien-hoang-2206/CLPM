import React from 'react';

const SearchBar = ({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) => {
    return (
        <form style={{
            display: 'flex',
            flexDirection: ' column',
            width: 300
        }}>
            <input
                type="text"
                value={filterText} placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Only show products in stock
            </label>
        </form >
    );
};

export default SearchBar;