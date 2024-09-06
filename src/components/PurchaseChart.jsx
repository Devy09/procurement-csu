import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Nov 1', value1: 5, value2: 6 },
  { name: 'Nov 2', value1: 12, value2: 8 },
  { name: 'Nov 3', value1: 23, value2: 19 },
  { name: 'Nov 4', value1: 21, value2: 14 },
  { name: 'Nov 5', value1: 18, value2: 17 },
  { name: 'Nov 6', value1: 22, value2: 12 },
  { name: 'Nov 7', value1: 27, value2: 23 },
];

const PurchaseChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value1" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PurchaseChart;