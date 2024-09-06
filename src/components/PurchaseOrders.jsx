import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PurchaseOrders = () => {
  const orders = [
    { id: 1, supplier: 'Supplier A', date: '2023-03-15', status: 'Pending', total: '$1,500.00' },
    { id: 2, supplier: 'Supplier B', date: '2023-03-14', status: 'Approved', total: '$2,300.00' },
    { id: 3, supplier: 'Supplier C', date: '2023-03-13', status: 'Shipped', total: '$1,800.00' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Purchase Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Button>Create New Order</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.supplier}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge variant={order.status === 'Pending' ? 'secondary' : order.status === 'Approved' ? 'success' : 'primary'}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.total}</TableCell>
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

export default PurchaseOrders;