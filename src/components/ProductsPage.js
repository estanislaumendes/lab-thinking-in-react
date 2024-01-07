import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyStock, setShowOnlyStock] = useState(false);

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);

    if (newSearchTerm != '') {
      // Filtering products based on the search term and stock status
      const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(newSearchTerm.toLowerCase()) &&
          (!showOnlyStock || product.inStock)
      );

      setProducts(filteredProducts);
    } else {
      setProducts(jsonData);
    }
  };

  const handleStockChange = (isChecked) => {
    setShowOnlyStock(isChecked);

    // Filtering products based on the search term and stock status
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!isChecked || product.inStock)
    );

    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        onSearchChange={handleSearchChange}
        onStockChange={handleStockChange}
        showOnlyStock={showOnlyStock}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
