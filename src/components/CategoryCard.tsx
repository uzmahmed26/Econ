import React from 'react';
import { Link } from 'react-router';

const CategoryCard = (category:any) => {
  return (
    <Link to={`/products?category=${category.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="h-40 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{category.productCount} products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
