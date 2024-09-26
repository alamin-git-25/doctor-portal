import React from 'react';
import bg from '../../assets/images/footer.png';
import { Link } from 'react-router-dom';
// style={{background:`url(${bg})`}}
const Footer = () => {
    return (
        <section className='bg-primary'>
            <footer  className={`footer lg:place-items-center ml-6  h-[407px]   text-black`}>
 <nav>
 <h6 className="footer-title">SERVICES</h6>
    <Link>Emergency Checkup</Link>
    <Link>Monthly Checkup</Link>
    <Link>Weekly Checkup</Link>
    <Link>Deep Checkup</Link>
 </nav>
  <nav>
    <h6 className="footer-title">ORAL HEALTH</h6>
    <Link>Fluoride Treatment</Link>
    <Link>Cavity Filling</Link>
    <Link>Teath Whitening</Link>

  </nav>
  <nav>
    <h6 className="footer-title">OUR ADDRESS</h6>
    <Link>New York - 101010 Hudson</Link>
  </nav>
  
</footer>
<aside>
<p className='text-red-700 text-center pb-10'>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
        </section>
    );
};

export default Footer;