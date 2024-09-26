import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
<div class="navbar bg-base-100 fixed z-10 top-0">
  <div class="navbar-start">
  <div class="dropdown">
    <div tabindex="0" role="button" className="btn justify-end lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     <li><Link to='home'>Home</Link></li>
      <li><Link to='about'>Appointment</Link></li>
      <li><Link to='about'>Reviews</Link></li>
      <li><Link to='about'>About</Link></li>
      <li><Link to='about'>Contact Us</Link></li>
      <li><Link to='about'>Login</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost text-3xl ml-20">Doctor-Portal</Link>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal px-1 mr-20">
      <li><Link className='text-xl mx-2' to='home'>Home</Link></li>  
      <li><Link className='text-xl mx-2' to='about'>Appointment</Link></li>
      <li><Link className='text-xl mx-2' to='about'>Reviews</Link></li>
      <li><Link className='text-xl mx-2' to='about'>About</Link></li>
      <li><Link className='text-xl mx-2' to='about'>Contact Us</Link></li>
      <li><Link className='text-xl mx-2' to='about'>Login</Link></li>
    </ul>
    
  </div>
  
</div>
    );
};

export default Header;