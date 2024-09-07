import React from 'react';
import { Button } from "@/components/ui/button";

const ProductsPagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center mt-4">
      <Button
        variant="outline"
        size="sm"
        className="mx-1"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      {[...Array(totalPages).keys()].map((number) => (
        <Button
          key={number + 1}
          variant={currentPage === number + 1 ? "default" : "outline"}
          size="sm"
          className="mx-1"
          onClick={() => onPageChange(number + 1)}
        >
          {number + 1}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="mx-1"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default ProductsPagination;