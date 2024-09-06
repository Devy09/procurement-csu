import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PurchaseRequestForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    prNumber: '',
    department: '',
    section: '',
    saiNo: '',
    alobsNo: '',
    date: '',
    purpose: '',
    total: ''
  });

  const [itemData, setItemData] = useState({
    description: '',
    quantity: '',
    unit: '',
    stockNo: '',
    unitCost: '',
    totalCost: ''
  });

  const [items, setItems] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItemData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleAddItem = () => {
    setItems(prevItems => [...prevItems, itemData]);
    setItemData({
      description: '',
      quantity: '',
      unit: '',
      stockNo: '',
      unitCost: '',
      totalCost: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { ...formData, items });
    onClose();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Purchase Request Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prNumber">PR Number</Label>
              <Input id="prNumber" name="prNumber" value={formData.prNumber} onChange={handleFormChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select name="department" value={formData.department} onValueChange={(value) => handleFormChange({ target: { name: 'department', value } })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                  <SelectItem value="hr">HR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="section">Section</Label>
              <Select name="section" value={formData.section} onValueChange={(value) => handleFormChange({ target: { name: 'section', value } })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="section1">Section 1</SelectItem>
                  <SelectItem value="section2">Section 2</SelectItem>
                  <SelectItem value="section3">Section 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="saiNo">SAI No.</Label>
              <Input id="saiNo" name="saiNo" value={formData.saiNo} onChange={handleFormChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="alobsNo">ALOBS No.</Label>
              <Input id="alobsNo" name="alobsNo" value={formData.alobsNo} onChange={handleFormChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" value={formData.date} onChange={handleFormChange} />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Item Add Section</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="description">Item Description</Label>
                  <Select name="description" value={itemData.description} onValueChange={(value) => handleItemChange({ target: { name: 'description', value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select item" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="item1">Item 1</SelectItem>
                      <SelectItem value="item2">Item 2</SelectItem>
                      <SelectItem value="item3">Item 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" name="quantity" type="number" value={itemData.quantity} onChange={handleItemChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit">Unit</Label>
                  <Select name="unit" value={itemData.unit} onValueChange={(value) => handleItemChange({ target: { name: 'unit', value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pcs">Pcs</SelectItem>
                      <SelectItem value="kg">Kg</SelectItem>
                      <SelectItem value="liter">Liter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stockNo">Stock No.</Label>
                  <Input id="stockNo" name="stockNo" value={itemData.stockNo} onChange={handleItemChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unitCost">Unit Cost</Label>
                  <Input id="unitCost" name="unitCost" type="number" value={itemData.unitCost} onChange={handleItemChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="totalCost">Total Cost</Label>
                  <Input id="totalCost" name="totalCost" type="number" value={itemData.totalCost} onChange={handleItemChange} />
                </div>
              </div>
              <Button type="button" onClick={handleAddItem}>Add Item</Button>
            </CardContent>
          </Card>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Stock No.</TableHead>
                <TableHead>Unit Cost</TableHead>
                <TableHead>Total Cost</TableHead>
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

          <div className="space-y-2">
            <Label htmlFor="purpose">Purpose</Label>
            <Textarea id="purpose" name="purpose" value={formData.purpose} onChange={handleFormChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="total">Total</Label>
            <Input id="total" name="total" type="number" value={formData.total} onChange={handleFormChange} />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit">Submit Request</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PurchaseRequestForm;