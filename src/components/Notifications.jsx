import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BellIcon, CheckIcon, AlertTriangleIcon, InfoIcon } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'info', message: 'New product added to inventory', date: '2023-03-16 09:30 AM' },
    { id: 2, type: 'warning', message: 'Low stock alert for Product B', date: '2023-03-15 02:45 PM' },
    { id: 3, type: 'success', message: 'Purchase order PO-001 approved', date: '2023-03-14 11:20 AM' },
    { id: 4, type: 'error', message: 'Failed to process payment for Order #1234', date: '2023-03-13 04:15 PM' },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'info':
        return <InfoIcon className="h-5 w-5 text-blue-500" />;
      case 'warning':
        return <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case 'success':
        return <CheckIcon className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertTriangleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <BellIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Button variant="outline">Mark All as Read</Button>
        </div>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start p-4 bg-white rounded-lg shadow">
              <div className="flex-shrink-0 mr-4">
                {getIcon(notification.type)}
              </div>
              <div className="flex-grow">
                <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                <p className="text-xs text-gray-500">{notification.date}</p>
              </div>
              <Badge variant={notification.type === 'info' ? 'default' : notification.type === 'warning' ? 'warning' : notification.type === 'success' ? 'success' : 'destructive'}>
                {notification.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Notifications;