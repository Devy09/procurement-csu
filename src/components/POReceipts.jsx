import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const POReceipts = () => {
  const receipts = [
    { id: 1, poNumber: 'PO-001', receivedDate: '2023-03-16', status: 'Complete', items: 5 },
    { id: 2, poNumber: 'PO-002', receivedDate: '2023-03-15', status: 'Partial', items: 3 },
    { id: 3, poNumber: 'PO-003', receivedDate: '2023-03-14', status: 'Pending', items: 0 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>PO Receipts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Button>Record New Receipt</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Receipt ID</TableHead>
              <TableHead>PO Number</TableHead>
              <TableHead>Received Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Items Received</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {receipts.map((receipt) => (
              <TableRow key={receipt.id}>
                <TableCell>{receipt.id}</TableCell>
                <TableCell>{receipt.poNumber}</TableCell>
                <TableCell>{receipt.receivedDate}</TableCell>
                <TableCell>
                  <Badge variant={receipt.status === 'Complete' ? 'success' : receipt.status === 'Partial' ? 'warning' : 'secondary'}>
                    {receipt.status}
                  </Badge>
                </TableCell>
                <TableCell>{receipt.items}</TableCell>
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

export default POReceipts;