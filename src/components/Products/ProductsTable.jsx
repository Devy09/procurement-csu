import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EyeIcon, PencilIcon, TrashIcon } from 'lucide-react';

const ProductsTable = ({ products, viewMode }) => {
  const handleView = (id) => {
    console.log('View product', id);
    // Implement view product functionality
  };

  const handleEdit = (id) => {
    console.log('Edit product', id);
    // Implement edit product functionality
  };

  const handleDelete = (id) => {
    console.log('Delete product', id);
    // Implement delete product functionality
  };

  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img src={product.photo} alt={product.name} className="w-full h-32 object-cover mb-2" />
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.price}</p>
            <Badge variant={product.status === 'Included' ? 'success' : 'secondary'}>
              {product.status}
            </Badge>
            <div className="mt-2">
              <Button variant="outline" size="sm" className="mr-1" onClick={() => handleView(product.id)}>
                <EyeIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="mr-1" onClick={() => handleEdit(product.id)}>
                <PencilIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleDelete(product.id)}>
                <TrashIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
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
                <Button variant="outline" size="icon" onClick={() => handleView(product.id)}>
                  <EyeIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleEdit(product.id)}>
                  <PencilIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleDelete(product.id)}>
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;