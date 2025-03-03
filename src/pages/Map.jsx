import React from 'react';

const OrderTracking = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-800">★ STREETFIT</span>
          </div>
          {/* Menu */}
          <div className="flex space-x-6 text-gray-800 font-medium">
            <a href="/" className="hover:text-green-500">Home</a>
            <a href="/collections" className="hover:text-green-500">Collections</a>
            <a href="/new" className="hover:text-green-500">New</a>
            <a href="/promo" className="hover:text-green-500">Promo</a>
          </div>
          {/* Search & Icons */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-4 py-2 border rounded-full text-sm focus:outline-none"
            />
            <span className="text-gray-800 cursor-pointer">❤️</span>
            <span className="text-gray-800 cursor-pointer">🛒</span>
            <span className="text-gray-800 cursor-pointer">🔑</span>
          </div>
        </div>
      </nav>

      {/* Tracking Header */}
      <header className="text-center py-4 bg-white shadow">
        <h1 className="text-xl font-bold">📍 "Suivi du livreur en cours sur la map... 🚛📡"</h1>
      </header>

      {/* Map Section */}
      <div className="p-6">
        <img src="./Images/map1.jpg" alt="Map Tracking" className="w-full h-96 object-cover" />
      </div>

      {/* Delivery Info */}
      <div className="bg-gray-200 p-6 rounded-lg m-6 shadow-md">
        {/* Driver Info */}
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <img src="./Images/profil.jpg" alt="Driver" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h2 className="font-bold">Rajesh Kumar</h2>
            <p className="text-yellow-500">★★★★☆</p>
          </div>
          <div className="ml-auto flex space-x-4">
            <button className="bg-gray-200 p-2 rounded-full">📞</button>
          </div>
        </div>

        {/* Delivery Progress */}
        <div className="bg-white p-4 mt-4 rounded-lg shadow">
          <p>
            <strong>StreetFit Depot</strong> → <strong>Thakur House, Sector 22</strong>
          </p>
          <div className="mt-2 flex items-center">
            <div className="w-full h-2 bg-gray-300 rounded-full relative">
              <div className="w-1/2 h-2 bg-black rounded-full"></div>
            </div>
            <span className="ml-2">📍</span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="bg-white p-6 rounded-lg m-6 shadow-md">
        <div className="flex items-center">
          <img src="./Images/produit5.jpg" alt="Product" className="w-16 h-16 rounded mr-4" />
          <div>
            <p className="text-gray-600">Arriving in 2 Days</p>
            <h3 className="font-bold">Basic Slim Fit T-Shirt</h3>
            <p className="text-lg font-bold">50 DT</p>
          </div>
          <span className="ml-auto bg-green-200 text-green-800 px-2 py-1 rounded">Paid</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-10 p-6 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold">ABOUT STREETFIT</h3>
            <ul>
              <li>The StreetFit Brand</li>
              <li>Our People</li>
              <li>Product Quality</li>
              <li>Our Sustainability</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">CUSTOMER SERVICE</h3>
            <ul>
              <li>Gift Services</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">CATEGORIES</h3>
            <ul>
              <li>Men's Collection</li>
              <li>Women's Collection</li>
              <li>Kids Collection</li>
              <li>Polo Shop</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">NEWSLETTER</h3>
            <p>Keep up to date with our latest news and special offers</p>
            <input type="email" placeholder="Your email address" className="p-2 w-full text-gray-800 rounded" />
            <button className="w-full bg-green-500 text-white py-2 mt-2 rounded">Subscribe</button>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="text-white">📘</a>
          <a href="#" className="text-white">📷</a>
          <a href="#" className="text-white">📱</a>
          <a href="#" className="text-white">📧</a>
        </div>
      </footer>
    </div>
  );
};

export default OrderTracking;