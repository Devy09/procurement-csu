import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputField, SelectField } from './FormFields';
import ItemTable from './ItemTable';

const PurchaseRequestForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    prNumber: '', department: '', section: '', saiNo: '', alobsNo: '', date: '', purpose: '', total: ''
  });
  const [itemData, setItemData] = useState({
    description: '', quantity: '', unit: '', stockNo: '', unitCost: '', totalCost: ''
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
    setItemData({ description: '', quantity: '', unit: '', stockNo: '', unitCost: '', totalCost: '' });
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
            <InputField label="PR Number" name="prNumber" value={formData.prNumber} onChange={handleFormChange} />
            <SelectField label="Department" name="department" value={formData.department} onChange={handleFormChange}
              options={[
                { value: 'sales', label: 'Sales' },
                { value: 'marketing', label: 'Marketing' },
                { value: 'it', label: 'IT' },
                { value: 'hr', label: 'HR' }
              ]} />
            <SelectField label="Section" name="section" value={formData.section} onChange={handleFormChange}
              options={[
                { value: 'section1', label: 'Section 1' },
                { value: 'section2', label: 'Section 2' },
                { value: 'section3', label: 'Section 3' }
              ]} />
            <InputField label="SAI No." name="saiNo" value={formData.saiNo} onChange={handleFormChange} />
            <InputField label="ALOBS No." name="alobsNo" value={formData.alobsNo} onChange={handleFormChange} />
            <InputField label="Date" name="date" type="date" value={formData.date} onChange={handleFormChange} />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Item Add Section</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <SelectField label="Item Description" name="description" value={itemData.description} onChange={handleItemChange}
                  options={[
                    { value: 'item1', label: 'Item 1' },
                    { value: 'item2', label: 'Item 2' },
                    { value: 'item3', label: 'Item 3' }
                  ]} />
                <InputField label="Quantity" name="quantity" type="number" value={itemData.quantity} onChange={handleItemChange} />
                <SelectField label="Unit" name="unit" value={itemData.unit} onChange={handleItemChange}
                  options={[
                    { value: 'pcs', label: 'Pcs' },
                    { value: 'kg', label: 'Kg' },
                    { value: 'liter', label: 'Liter' }
                  ]} />
                <InputField label="Stock No." name="stockNo" value={itemData.stockNo} onChange={handleItemChange} />
                <InputField label="Unit Cost" name="unitCost" type="number" value={itemData.unitCost} onChange={handleItemChange} />
                <InputField label="Total Cost" name="totalCost" type="number" value={itemData.totalCost} onChange={handleItemChange} />
              </div>
              <Button type="button" onClick={handleAddItem}>Add Item</Button>
            </CardContent>
          </Card>

          <ItemTable items={items} />

          <div className="space-y-2">
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">Purpose</label>
            <Textarea id="purpose" name="purpose" value={formData.purpose} onChange={handleFormChange} className="h-24" />
          </div>

          <InputField label="Total" name="total" type="number" value={formData.total} onChange={handleFormChange} />

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