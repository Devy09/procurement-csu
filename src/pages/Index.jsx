import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, BellIcon, LogOutIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StatusCard from '../components/StatusCard';
import PurchaseTable from '../components/PurchaseTable';
import PurchaseChart from '../components/PurchaseChart';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-screen p-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Procutimus</h1>
          </div>
          <nav>
            <ul className="space-y-2">
              <li className="bg-blue-100 text-blue-600 p-2 rounded">Dashboard</li>
              <li className="p-2">Products</li>
              <li className="p-2">Purchase Orders</li>
              <li className="p-2">PO Receipts</li>
              <li className="p-2">Suppliers</li>
              <li className="p-2">Notifications</li>
            </ul>
          </nav>
          <div className="mt-auto pt-4">
            <Button variant="outline" className="w-full justify-start">
              <LogOutIcon className="mr-2 h-4 w-4" /> Log Out
            </Button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <Input type="text" placeholder="Search..." className="w-64" />
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-gray-500" />
                <span>Nov 1 - Nov 7, 2020</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <BellIcon className="h-5 w-5 text-gray-500" />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Dashboard content */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            
            {/* Status cards */}
            <div className="grid grid-cols-4 gap-4">
              <StatusCard title="Open" count={48} color="blue" />
              <StatusCard title="Pending" count={61} color="orange" />
              <StatusCard title="Not Send" count={32} color="red" />
              <StatusCard title="Performing" count={153} color="green" />
            </div>

            {/* Create Purchase button */}
            <div className="flex justify-end">
              <Button className="bg-green-500 hover:bg-green-600">
                CREATE PURCHASE
              </Button>
            </div>

            {/* Purchase table */}
            <Card className="p-6">
              <PurchaseTable />
            </Card>

            {/* Purchase chart */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Purchase requests</h3>
              <PurchaseChart />
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;