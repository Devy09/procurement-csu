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
import Suppliers from '../components/Suppliers';
import Notifications from '../components/Notifications';
import PurchaseRequestForm from '../components/PurchaseRequestForm';

const Index = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Products', icon: PackageIcon },
    { name: 'Purchase Orders', icon: ShoppingCartIcon },
    { name: 'Suppliers', icon: UsersIcon },
    { name: 'Notifications', icon: Bell },
  ];

  const togglePurchaseForm = () => {
    setShowPurchaseForm(!showPurchaseForm);
  };

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
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={togglePurchaseForm}>
                CREATE PURCHASE
              </Button>
            </div>
            {showPurchaseForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                  <PurchaseRequestForm onClose={togglePurchaseForm} />
                </div>
              </div>
            )}
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
          <h1 className="text-2xl font-bold text-accent">CSU Procurement</h1>
        </div>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`p-2 rounded cursor-pointer transition-colors duration-200 flex items-center ${
                  activeMenu === item.name
                    ? 'bg-accent/10 text-accent'
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
            <BellIcon className="h-5 w-5 text-gray-500 cursor-pointer hover:text-accent transition-colors duration-200" />
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