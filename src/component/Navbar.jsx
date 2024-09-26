import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [count, setCount] = useState(0);

    return (
      <>
      <div className="bg-white mx-auto container flex justify-between items-center w-full ">
        <div className="flex items-center mt-4 ">
          <Link to="/">
          <img 
            src="https://us.vaio.com/cdn/shop/files/logo.svg?v=1698412349&width=180" 
            alt="Logo" 
            className='' 
          />
          </Link>
          <div className='flex ml-11 gap-10 font-medium cursor-pointer'>
            <Link to="/Shop">Shop</Link>
            <Link to="/Shop">Collections</Link>
            <Link to="/Shop">Why Vaio</Link>
            <Link to="/Shop">Business Hub</Link>
            <Link to="/Shop">Global</Link>
            <Link to="/Shop">Support</Link>
          </div>
        </div>
        <div className="flex items-center gap-10 mt-5">
          <i className='bx bx-search text-2xl'></i> {/* Search icon */}
          <i className='bx bx-user text-2xl'></i>
          <i className='bx bx-cart-alt text-2xl'></i>
        </div>
      </div>
      </>
    );
}

export default Navbar;
