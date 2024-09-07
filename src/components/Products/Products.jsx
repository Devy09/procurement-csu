import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductsHeader from './ProductsHeader';
import ProductsTable from './ProductsTable';
import ProductsPagination from './ProductsPagination';

const Products = () => {
  const [viewMode, setViewMode] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const products = [
    { id: '213590', photo: '/placeholder.svg', name: 'Xiaomi RedmiBook 14 (2020) 7NCD', price: '$779.35', status: 'Included', category: ['PC Computers', '#Laptop', '#Xiaomi'], stock: 37, updated: '14 Oct 2020' },
    { id: '214201', photo: '/placeholder.svg', name: 'Apple MacBook Air 13" M1 Retina display (MWP22) 2020', price: '$1,649.24', status: 'Excluded', category: ['PC Computers', '#Laptop', '#Apple', '#MacBook'], stock: 29, updated: '6 Jul 2020' },
    { id: '213300', photo: '/placeholder.svg', name: 'Samsung Galaxy Tab S6 10.5" 6/128GB Wi-Fi (SM-T860) Mountain Gray', price: '$589.59', status: 'Excluded', category: ['PC Computers', '#Tablet', '#Samsung'], stock: 35, updated: '17 Mar 2020' },
    { id: '214200', photo: '/placeholder.svg', name: 'Sony PlayStation 5 Digital Edition 825 GB', price: '$529.85', status: 'Included', category: ['PC Computers', '#Game consoles', '#Sony'], stock: 41, updated: '18 Jan 2020' },
    { id: '213100', photo: '/placeholder.svg', name: 'TP-Link Archer C6', price: '$89.55', status: 'Included', category: ['PC Computers', '#Network equipment', '#Wireless equipment', '#TP-Link'], stock: 83, updated: '19 Oct 2020' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleAddProduct = () => {
    console.log('Add new product');
    // Implement add product functionality
  };

  const handleImportProducts = () => {
    console.log('Import products');
    // Implement import products functionality
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
      </CardHeader>
      <CardContent>
        <ProductsHeader
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
          onSearch={handleSearch}
          onAddProduct={handleAddProduct}
          onImportProducts={handleImportProducts}
        />
        <ProductsTable products={currentItems} viewMode={viewMode} />
        <ProductsPagination
          currentPage={currentPage}
          totalItems={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </CardContent>
    </Card>
  );
};

export default Products;