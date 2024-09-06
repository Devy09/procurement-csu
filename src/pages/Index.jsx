import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, BellIcon, LogOutIcon, HomeIcon, PackageIcon, ShoppingCartIcon, TruckIcon, UsersIcon, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StatusCard from '../components/StatusCard';
import PurchaseTable from '../components/PurchaseTable';
import PurchaseChart from '../components/PurchaseChart';
import Products from '../components/Products';
import PurchaseOrders from '../components/PurchaseOrders';
import POReceipts from '../components/POReceipts';
import Suppliers from '../components/Suppliers';
import Notifications from '../components/Notifications';

const Index = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Products', icon: PackageIcon },
    { name: 'Purchase Orders', icon: ShoppingCartIcon },
    { name: 'PO Receipts', icon: TruckIcon },
    { name: 'Suppliers', icon: UsersIcon },
    { name: 'Notifications', icon: Bell },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'Dashboard':
        return (
          <>
            <div className="grid grid-cols-4 gap-4 mb-8">
              <StatusCard title="Open" count={48} color="blue" />
              <StatusCard title="Pending" count={61} color="orange" />
              <StatusCard title="Not Send" count={32} color="red" />
              <StatusCard title="Performing" count={153} color="green" />
            </div>
            <div className="flex justify-end mb-8">
              <Button className="bg-green-500 hover:bg-green-600">
                CREATE PURCHASE
              </Button>
            </div>
            <Card className="p-6 mb-8">
              <PurchaseTable />
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Purchase requests</h3>
              <PurchaseChart />
            </Card>
          </>
        );
      case 'Products':
        return <Products />;
      case 'Purchase Orders':
        return <PurchaseOrders />;
      case 'PO Receipts':
        return <POReceipts />;
      case 'Suppliers':
        return <Suppliers />;
      case 'Notifications':
        return <Notifications />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white h-screen p-4 shadow-md">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600">Procutimus</h1>
        </div>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`p-2 rounded cursor-pointer transition-colors duration-200 flex items-center ${
                  activeMenu === item.name
                    ? 'bg-blue-100 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveMenu(item.name)}
              >
                <item.icon className="mr-2 h-5 w-5" />
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-4">
          <Button variant="outline" className="w-full justify-start">
            <LogOutIcon className="mr-2 h-4 w-4" /> Log Out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <Input type="text" placeholder="Search..." className="w-64" />
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <span>Nov 1 - Nov 7, 2020</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <BellIcon className="h-5 w-5 text-gray-500 cursor-pointer hover:text-blue-600 transition-colors duration-200" />
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">{activeMenu}</h2>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;