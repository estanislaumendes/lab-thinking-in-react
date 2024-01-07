import { useState } from 'react';

function SearchBar({ onSearchChange, onStockChange, showOnlyStock }) {
  const handleInputChange = (e) => {
    if (e.target.type === 'checkbox') {
      onStockChange(e.target.checked);
    } else {
      onSearchChange(e.target.value);
    }
  };

  return (
    <div className="SearchBar">
      <h3>Search</h3>
      <input
        type="text"
        placeholder="Search products..."
        id="search"
        name="search"
        onChange={handleInputChange}
      />

      <div className="checkbox-group">
        <input
          type="checkbox"
          name="checkbox"
          checked={showOnlyStock}
          onChange={handleInputChange}
        />
        <label for="checkbox"> Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
