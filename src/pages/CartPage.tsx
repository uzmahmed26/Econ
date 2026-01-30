import React, { useState } from 'react';
import { Link } from 'react-router';
import QuantitySelector from '../components/QuantitySelector';

const CartPage = () => {
  // Sample cart items - in a real app, this would come from state/context
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      image: "https://placehold.co/100x100/e2e8f0/64748b?text=Headphones",
      quantity: 1
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      image: "https://placehold.co/100x100/e2e8f0/64748b?text=Smart+Watch",
      quantity: 2
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 24.99,
      image: "https://placehold.co/100x100/e2e8f0/64748b?text=T-Shirt",
      quantity: 1
    }
  ]);

  const updateQuantity = ({id, newQuantity}:any) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id:any) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 9.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="p-6">
                      <div className="flex items-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-24 h-24 object-contain mr-6"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                          <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                          
                          <div className="mt-4 flex items-center">
                            <QuantitySelector 
                              quantity={item.quantity} 
                              onQuantityChange={(qty:any) => updateQuantity(item.id, qty)} 
                            />
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="ml-4 text-red-600 hover:text-red-800 font-medium"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="text-lg font-semibold text-gray-800">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6">
                <Link 
                  to="/products" 
                  className="inline-block text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  &larr; Continue Shopping
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded transition mb-4">
                  Proceed to Checkout
                </button>
                
                <div className="text-center text-sm text-gray-500">
                  Shipping & taxes calculated at checkout
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-2xl font-medium text-gray-800 mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet</p>
            <Link 
              to="/products" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded transition"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
