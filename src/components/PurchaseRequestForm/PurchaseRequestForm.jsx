import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputField, SelectField, DateField } from './FormFields';
import ItemTable from './ItemTable';
import ItemAddSection from './ItemAddSection';

const PurchaseRequestForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    prNumber: '', department: '', section: '', saiNo: '', alobsNo: '', date: '', purpose: '', total: ''
  });
  const [items, setItems] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
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
            <SelectField
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleFormChange}
              options={[
                { value: 'sales', label: 'Sales' },
                { value: 'marketing', label: 'Marketing' },
                { value: 'it', label: 'IT' },
                { value: 'hr', label: 'HR' }
              ]}
            />
            <SelectField
              label="Section"
              name="section"
              value={formData.section}
              onChange={handleFormChange}
              options={[
                { value: 'section1', label: 'Section 1' },
                { value: 'section2', label: 'Section 2' },
                { value: 'section3', label: 'Section 3' }
              ]}
            />
            <InputField label="SAI No." name="saiNo" value={formData.saiNo} onChange={handleFormChange} />
            <InputField label="ALOBS No." name="alobsNo" value={formData.alobsNo} onChange={handleFormChange} />
            <DateField label="Date" name="date" value={formData.date} onChange={handleFormChange} />
          </div>

          <ItemAddSection onAddItem={handleAddItem} />

          <div className="max-h-60 overflow-y-auto">
            <ItemTable items={items} />
          </div>

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