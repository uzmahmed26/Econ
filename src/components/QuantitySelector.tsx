import React, { useState } from 'react';

const QuantitySelector = ({ quantity, onQuantityChange}: any) => {
  const increment = () => {
    onQuantityChange(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded">
      <button 
        onClick={decrement}
        className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="px-3 py-1 text-gray-800">{quantity}</span>
      <button 
        onClick={increment}
        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
