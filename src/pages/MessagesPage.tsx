import React from 'react';
import { Link } from 'react-router';

const MessagesPage = () => {
  // Sample messages data
  const messages = [
    {
      id: 1,
      sender: "ShopEase Support",
      subject: "Your order has been shipped!",
      preview: "Your order #12345 has been shipped and is on its way...",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      sender: "Promotions",
      subject: "Special offer just for you",
      preview: "Get 20% off your next purchase with code SAVE20...",
      time: "1 day ago",
      unread: false
    },
    {
      id: 3,
      sender: "Order Updates",
      subject: "Delivery delay notification",
      preview: "We apologize, but your order may be delayed by 1 day...",
      time: "3 days ago",
      unread: false
    },
    {
      id: 4,
      sender: "Welcome",
      subject: "Welcome to ShopEase!",
      preview: "Thank you for joining our platform. Here's a 10% off coupon...",
      time: "1 week ago",
      unread: false
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Messages</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-800">Inbox</h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm bg-gradient-to-b from-primary to-primary-dark text-white rounded-md">
                  Compose
                </button>
                <button className="px-4 py-2 text-sm border border-gray-300 rounded-md">
                  Refresh
                </button>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`p-4 hover:bg-gray-50 cursor-pointer ${message.unread ? 'bg-blue-50' : ''}`}
              >
                <div className="flex justify-between">
                  <div className="flex items-center">
                    {message.unread && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    )}
                    <h3 className={`font-medium ${message.unread ? 'text-blue-700' : 'text-gray-900'}`}>
                      {message.sender}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500">{message.time}</span>
                </div>
                <h4 className={`font-medium mt-1 ${message.unread ? 'text-blue-700' : 'text-gray-900'}`}>
                  {message.subject}
                </h4>
                <p className="text-gray-600 text-sm mt-1 truncate">
                  {message.preview}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-sm">Showing 4 of 4 messages</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-md">
                  Previous
                </button>
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-md">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;