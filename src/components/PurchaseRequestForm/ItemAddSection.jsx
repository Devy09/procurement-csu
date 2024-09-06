import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputField, SelectField } from './FormFields';

const ItemAddSection = ({ onAddItem }) => {
  const [itemData, setItemData] = useState({
    description: '', quantity: '', unit: '', stockNo: '', unitCost: '', totalCost: ''
  });

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItemData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleAddItem = () => {
    onAddItem(itemData);
    setItemData({
      description: '', quantity: '', unit: '', stockNo: '', unitCost: '', totalCost: ''
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Item Add Section</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <SelectField
            label="Item Description"
            name="description"
            value={itemData.description}
            onChange={handleItemChange}
            options={[
              { value: 'item1', label: 'Item 1' },
              { value: 'item2', label: 'Item 2' },
              { value: 'item3', label: 'Item 3' }
            ]}
          />
          <InputField label="Quantity" name="quantity" type="number" value={itemData.quantity} onChange={handleItemChange} />
          <SelectField
            label="Unit"
            name="unit"
            value={itemData.unit}
            onChange={handleItemChange}
            options={[
              { value: 'pcs', label: 'Pcs' },
              { value: 'kg', label: 'Kg' },
              { value: 'liter', label: 'Liter' }
            ]}
          />
          <InputField label="Stock No." name="stockNo" value={itemData.stockNo} onChange={handleItemChange} />
          <InputField label="Unit Cost" name="unitCost" type="number" value={itemData.unitCost} onChange={handleItemChange} />
          <InputField label="Total Cost" name="totalCost" type="number" value={itemData.totalCost} onChange={handleItemChange} />
        </div>
        <Button type="button" onClick={handleAddItem}>Add Item</Button>
      </CardContent>
    </Card>
  );
};

export default ItemAddSection;