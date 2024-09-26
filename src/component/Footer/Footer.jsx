import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-200">
      <div className="container mx-auto py-12">
        {/* Newsletter Signup */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Inner Circle</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter</p>
          <form className="flex justify-center items-center space-x-4">
            <input
              type="email"
              className="border-2 border-gray-300 px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              placeholder="Enter your email address here"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-gray-700">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm">
              Enhance Your Computing Experience with Cutting-Edge VAIO Laptops
            </p>
            <p className="text-sm">
              The use of the 'VAIO' trademark is by the permission of and
              subject to license with VAIO Corporation. Microsoft, MS and
              Windows are registered trademarks of Microsoft Corporation. Intel
              and Intel Core are trademarks of Intel Corporation in the U.S.
              and/or other countries.
            </p>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">All VAIO</a></li>
              <li><a href="#" className="hover:underline">F Series</a></li>
              <li><a href="#" className="hover:underline">SX Series</a></li>
              <li><a href="#" className="hover:underline">Educational Discount</a></li>
              <li><a href="#" className="hover:underline">Essential Worker Discount</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Do Not Sell My Personal Information</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Innovation Hub</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 py-4 mt-12 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
