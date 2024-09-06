import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PurchaseTable = () => {
  const purchases = [
    { id: 2135, status: 'Open', sendingStatus: 'Sent', payment: 'Not Received', purchaser: 'Leslie Alexander', department: 'Sale', supplier: 'Marvin McKinney', total: '$446.61', date: '02 Sep 2020', dueDate: '12 Sep 2020' },
    { id: 2134, status: 'Open', sendingStatus: 'Sent', payment: 'Not Received', purchaser: 'Ariane McCoy', department: 'Sale', supplier: 'Bessie Cooper', total: '$948.55', date: '19 Oct 2020', dueDate: '29 Oct 2020' },
    // Add more rows as needed
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID#</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Sending Status</TableHead>
          <TableHead>Payment</TableHead>
          <TableHead>Purchaser</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Supplier</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {purchases.map((purchase) => (
          <TableRow key={purchase.id}>
            <TableCell>{purchase.id}</TableCell>
            <TableCell>{purchase.status}</TableCell>
            <TableCell>{purchase.sendingStatus}</TableCell>
            <TableCell>{purchase.payment}</TableCell>
            <TableCell>{purchase.purchaser}</TableCell>
            <TableCell>{purchase.department}</TableCell>
            <TableCell>{purchase.supplier}</TableCell>
            <TableCell>{purchase.total}</TableCell>
            <TableCell>{purchase.date}</TableCell>
            <TableCell>{purchase.dueDate}</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PurchaseTable;