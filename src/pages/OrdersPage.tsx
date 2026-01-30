import React from 'react';
import { Link } from 'react-router';

const OrdersPage = () => {
  // Sample orders data
  const orders = [
    {
      id: "#12345",
      date: "2023-05-15",
      status: "Delivered",
      total: "$129.99",
      items: 3
    },
    {
      id: "#12344",
      date: "2023-05-10",
      status: "Shipped",
      total: "$89.50",
      items: 2
    },
    {
      id: "#12343",
      date: "2023-05-05",
      status: "Processing",
      total: "$249.99",
      items: 1
    },
    {
      id: "#12342",
      date: "2023-04-28",
      status: "Delivered",
      total: "$54.99",
      items: 2
    },
    {
      id: "#12341",
      date: "2023-04-20",
      status: "Cancelled",
      total: "$79.99",
      items: 1
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Orders</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200 p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-800">Order History</h2>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>All Statuses</option>
                  <option>Delivered</option>
                  <option>Shipped</option>
                  <option>Processing</option>
                  <option>Cancelled</option>
                </select>
                <button className="px-4 py-2 text-sm bg-gradient-to-b from-primary to-primary-dark text-white rounded-md">
                  Track Order
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{order.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.items} item(s)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                      <button className="text-gray-600 hover:text-gray-900">Track</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-sm">Showing 5 of 5 orders</p>
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Activity</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span>New order placed</span>
                <span className="text-gray-500">2 days ago</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Order shipped</span>
                <span className="text-gray-500">3 days ago</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Order delivered</span>
                <span className="text-gray-500">5 days ago</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <button className="w-full text-left text-sm text-indigo-600 hover:text-indigo-800">Contact Support</button>
              </li>
              <li>
                <button className="w-full text-left text-sm text-indigo-600 hover:text-indigo-800">Return Policy</button>
              </li>
              <li>
                <button className="w-full text-left text-sm text-indigo-600 hover:text-indigo-800">Track Package</button>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Order Statistics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Total Orders</span>
                <span className="text-sm font-medium">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Completed</span>
                <span className="text-sm font-medium">22</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Pending</span>
                <span className="text-sm font-medium">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;