import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ListIcon, LayoutGridIcon, FilterIcon, DownloadIcon, PlusIcon, PencilIcon, TrashIcon, EyeIcon } from 'lucide-react';

const Products = () => {
  const [viewMode, setViewMode] = useState('list');

  const products = [
    { id: '213590', photo: '/placeholder.svg', name: 'Xiaomi RedmiBook 14 (2020) 7NCD', price: '$779.35', status: 'Included', category: ['PC Computers', '#Laptop', '#Xiaomi'], stock: 37, updated: '14 Oct 2020' },
    { id: '214201', photo: '/placeholder.svg', name: 'Apple MacBook Air 13" M1 Retina display (MWP22) 2020', price: '$1,649.24', status: 'Excluded', category: ['PC Computers', '#Laptop', '#Apple', '#MacBook'], stock: 29, updated: '6 Jul 2020' },
    { id: '213300', photo: '/placeholder.svg', name: 'Samsung Galaxy Tab S6 10.5" 6/128GB Wi-Fi (SM-T860) Mountain Gray', price: '$589.59', status: 'Excluded', category: ['PC Computers', '#Tablet', '#Samsung'], stock: 35, updated: '17 Mar 2020' },
    { id: '214200', photo: '/placeholder.svg', name: 'Sony PlayStation 5 Digital Edition 825 GB', price: '$529.85', status: 'Included', category: ['PC Computers', '#Game consoles', '#Sony'], stock: 41, updated: '18 Jan 2020' },
    { id: '213100', photo: '/placeholder.svg', name: 'TP-Link Archer C6', price: '$89.55', status: 'Included', category: ['PC Computers', '#Network equipment', '#Wireless equipment', '#TP-Link'], stock: 83, updated: '19 Oct 2020' },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Products</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => setViewMode('list')}>
            <ListIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setViewMode('grid')}>
            <LayoutGridIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <FilterIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Input type="text" placeholder="Search..." className="w-64" />
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <span>Nov 1 - Nov 7, 2020</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Import and update products
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <PlusIcon className="mr-2 h-4 w-4" />
              Add new product
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID#</TableHead>
              <TableHead>Photo</TableHead>
              <TableHead>Item Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Update</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>
                  <img src={product.photo} alt={product.name} className="w-12 h-12 object-cover" />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Badge variant={product.status === 'Included' ? 'success' : 'secondary'}>
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {product.category.map((cat, index) => (
                    <Badge key={index} variant="outline" className="mr-1">
                      {cat}
                    </Badge>
                  ))}
                </TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.updated}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <EyeIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <PencilIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-center mt-4">
          <Button variant="outline" size="sm" className="mx-1">Previous</Button>
          <Button variant="outline" size="sm" className="mx-1">1</Button>
          <Button variant="outline" size="sm" className="mx-1">2</Button>
          <Button variant="outline" size="sm" className="mx-1">3</Button>
          <Button variant="outline" size="sm" className="mx-1">...</Button>
          <Button variant="outline" size="sm" className="mx-1">8</Button>
          <Button variant="outline" size="sm" className="mx-1">9</Button>
          <Button variant="outline" size="sm" className="mx-1">10</Button>
          <Button variant="outline" size="sm" className="mx-1">Next</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Products;