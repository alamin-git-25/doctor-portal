import React from 'react';
import chiar from '../../../assets/images/chair.png';
// import bg from '../../../assets/images/bg.png';

import './Banner.css';
import Card from './Card';
import CardDetails from './CardDetails';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const reDirct = ()=>{
    navigate('/appointment');
  }
  return (
    <div className="main">
      <div className='banner'>
        <div className=''>
          <h1 className='text-6xl font-bold'>Your New Smile Starts From Here</h1>
          <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reprehenderit ab, tempore aliquid ullam, praesentium debitis natus sint temporibus, id delectus eos? Quibusdam nemo illo recusandae repellat, dolorem iste earum!</p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white   font-bold" onClick={reDirct}>Get Started</button>
        </div>
        <img src={chiar} alt="" />

      </div>
      <Card />
    </div>

  );
};

export default Banner;