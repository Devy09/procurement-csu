import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Suppliers = () => {
  const suppliers = [
    { id: 1, name: 'Supplier A', category: 'Electronics', status: 'Active', lastOrder: '2023-03-10' },
    { id: 2, name: 'Supplier B', category: 'Clothing', status: 'Inactive', lastOrder: '2023-02-28' },
    { id: 3, name: 'Supplier C', category: 'Home & Garden', status: 'Active', lastOrder: '2023-03-15' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Suppliers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Button>Add New Supplier</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Order</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {suppliers.map((supplier) => (
              <TableRow key={supplier.id}>
                <TableCell>{supplier.id}</TableCell>
                <TableCell>{supplier.name}</TableCell>
                <TableCell>{supplier.category}</TableCell>
                <TableCell>
                  <Badge variant={supplier.status === 'Active' ? 'success' : 'secondary'}>
                    {supplier.status}
                  </Badge>
                </TableCell>
                <TableCell>{supplier.lastOrder}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">View</Button>
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Suppliers;