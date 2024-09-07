import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, ListIcon, LayoutGridIcon, FilterIcon, DownloadIcon, PlusIcon } from 'lucide-react';

const ProductsHeader = ({ viewMode, onViewModeChange, onSearch, onAddProduct, onImportProducts }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => onViewModeChange('list')} className={viewMode === 'list' ? 'bg-accent text-accent-foreground' : ''}>
            <ListIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => onViewModeChange('grid')} className={viewMode === 'grid' ? 'bg-accent text-accent-foreground' : ''}>
            <LayoutGridIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <FilterIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Input type="text" placeholder="Search..." className="w-64" onChange={(e) => onSearch(e.target.value)} />
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-gray-500" />
            <span>Nov 1 - Nov 7, 2020</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={onImportProducts}>
            <DownloadIcon className="mr-2 h-4 w-4" />
            Import and update products
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={onAddProduct}>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add new product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;