import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const StatusCard = ({ title, count, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    orange: 'bg-orange-100 text-orange-600',
    red: 'bg-red-100 text-red-600',
    green: 'bg-green-100 text-green-600',
  };

  return (
    <Card className={`${colorClasses[color]} overflow-hidden`}>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-4xl font-bold">{count}</p>
      </CardContent>
    </Card>
  );
};

export default StatusCard;