import React from 'react';
import { Link } from 'react-router';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { products, categories } from '../data/products';

const HomePage = () => {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  const popularProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner 
        title="Summer Sale is Live!" 
        subtitle="Up to 50% off on selected items. Limited time offer." 
        ctaText="Shop Now" 
        isDark={false}
      />

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <Link to="/products" className="text-indigo-600 hover:text-indigo-800 font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <Banner 
        title="Special Offers" 
        subtitle="Exclusive deals for new customers. Sign up today to get 20% off your first order." 
        ctaText="Sign Up" 
        isDark={true}
      />

      {/* Popular Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Popular Products</h2>
            <Link to="/products" className="text-indigo-600 hover:text-indigo-800 font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="py-16 bg-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Free Shipping on Orders Over $50</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Enjoy free shipping on all orders over $50. No code needed at checkout.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded transition"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
