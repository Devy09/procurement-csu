import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ItemTable = ({ items }) => (
  <div className="max-h-60 overflow-y-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead>Stock No.</TableHead>
          <TableHead>Unit Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.unit}</TableCell>
            <TableCell>{item.stockNo}</TableCell>
            <TableCell>{item.unitCost}</TableCell>
            <TableCell>{item.totalCost}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default ItemTable;