import React, { useState } from 'react';
import { useParams } from "react-router";
import { products } from '../data/products';
import QuantitySelector from '../components/QuantitySelector';
import ProductCard from '../components/ProductCard';

const ProductDetailsPage = () => {
  const { id } = useParams<any>();
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    // In a real app, this would dispatch an action to add the item to cart
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-96 object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-24 object-contain cursor-pointer border-2 border-transparent hover:border-indigo-600"
                  onClick={() => setSelectedImage(0)}
                />
                {/* Additional images would go here in a real implementation */}
              </div>
            </div>
            
            {/* Product Information */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461c.969 0 1.371-1.24.588-1.81l-1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
              </div>
              
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-gray-800">${product.price}</span>
                {product.originalPrice && (
                  <span className="ml-3 text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-gray-700 mr-4">Availability:</span>
                  <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div>
                  <span className="text-gray-700 mr-3">Quantity:</span>
                  <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
                </div>
                
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`px-6 py-3 rounded font-medium ${
                    product.inStock 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  } transition`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                
                <button className="p-3 border border-gray-300 rounded hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Details</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>High-quality materials for durability</li>
                  <li>Eco-friendly and sustainable</li>
                  <li>Easy to maintain and clean</li>
                  <li>Comes with manufacturer warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
