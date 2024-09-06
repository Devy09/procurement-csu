import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PurchaseTable = () => {
  const [purchases, setPurchases] = useState([
    { id: 2135, status: 'Open', sendingStatus: 'Sent', payment: 'Not Received', purchaser: 'Leslie Alexander', department: 'Sale', supplier: 'Marvin McKinney', total: '$446.61', date: '02 Sep 2020', dueDate: '12 Sep 2020' },
    { id: 2134, status: 'Open', sendingStatus: 'Sent', payment: 'Not Received', purchaser: 'Ariane McCoy', department: 'Sale', supplier: 'Bessie Cooper', total: '$948.55', date: '19 Oct 2020', dueDate: '29 Oct 2020' },
  ]);

  const [selectedPurchase, setSelectedPurchase] = useState(null);

  const handleEdit = (purchase) => {
    setSelectedPurchase({ ...purchase });
  };

  const handleSave = () => {
    setPurchases(purchases.map(p => p.id === selectedPurchase.id ? selectedPurchase : p));
    setSelectedPurchase(null);
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>PR No.</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Section</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Certified by</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Mode</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchases.map((purchase) => (
            <TableRow key={purchase.id}>
              <TableCell>{purchase.prno}</TableCell>
              <TableCell>{purchase.department}</TableCell>
              <TableCell>{purchase.section}</TableCell>
              <TableCell>{purchase.designation}</TableCell>
              <TableCell>{purchase.certifiedby}</TableCell>
              <TableCell>{purchase.supplier}</TableCell>
              <TableCell>{purchase.mode}</TableCell>
              <TableCell>{purchase.date}</TableCell>
              <TableCell>{purchase.dueDate}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Purchase Request Details</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      {Object.entries(purchase).map(([key, value]) => (
                        <div key={key} className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor={key} className="text-right">{key}</Label>
                          <Input id={key} value={value} className="col-span-3" readOnly />
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(purchase)}>Edit</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Edit Purchase Request</DialogTitle>
                    </DialogHeader>
                    {selectedPurchase && (
                      <div className="grid gap-4 py-4">
                        {Object.entries(selectedPurchase).map(([key, value]) => (
                          <div key={key} className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor={key} className="text-right">{key}</Label>
                            <Input
                              id={key}
                              value={value}
                              onChange={(e) => setSelectedPurchase({ ...selectedPurchase, [key]: e.target.value })}
                              className="col-span-3"
                            />
                          </div>
                        ))}
                        <Button onClick={handleSave}>Save Changes</Button>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default PurchaseTable;