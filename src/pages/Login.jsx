import React from "react";

const Login = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto bg-white shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src="/Images/login.jpg" alt="Login" className="w-full h-full object-cover" />
          </div>
          <div className="p-10">
            <h2 className="text-2xl font-bold">Welcome 👋</h2>
            <p className="text-gray-500 mb-4">Please login here</p>
            <form>
              <label className="block mb-2">Email Address</label>
              <input type="email" className="w-full border rounded p-2 mb-4" placeholder="robertfox@example.com" />

              <label className="block mb-2">Password</label>
              <input type="password" className="w-full border rounded p-2 mb-4" placeholder="**********" />

              <div className="flex items-center mb-4">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Remember Me</label>
              </div>

              <button className="w-full bg-green-500 text-white py-2 rounded">Login</button>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white mt-10 p-6 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold">ABOUT STREETFIT</h3>
            <ul>
              <li>The StreetFit Brand</li>
              <li>Our People</li>
              <li>Product Quality</li>
              <li>Our Sustainability</li>
              <li>The StreetFit Foundation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">CUSTOMER SERVICE</h3>
            <ul>
              <li>Gift Services</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">CATEGORIES</h3>
            <ul>
              <li>Men's Collection</li>
              <li>Women's Collection</li>
              <li>Kids Collection</li>
              <li>Polo Shop</li>
              <li>Shoe Shop</li>
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

export default Login;
