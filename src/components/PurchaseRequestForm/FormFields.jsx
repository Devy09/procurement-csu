import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="space-y-2">
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} name={name} type={type} value={value} onChange={onChange} />
  </div>
);

export const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="space-y-2">
    <Label htmlFor={name}>{label}</Label>
    <Select name={name} value={value} onValueChange={(value) => onChange({ target: { name, value } })}>
      <SelectTrigger>
        <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export const DateField = ({ label, name, value, onChange }) => (
  <div className="space-y-2">
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} name={name} type="date" value={value} onChange={onChange} />
  </div>
);