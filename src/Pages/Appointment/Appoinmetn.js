import React, { useState } from 'react';
import chiar from '../../assets/images/chair.png';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import '../../Pages/Home/Banner/Banner.css';

const Appoinmetn = ({date, setDate}) => {
    return (
        <div className="main">
            
        <div className='banner'> 
        <div className='box'>
        <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
      className='day'
    />
        </div>
        <img src={chiar} alt="" />
       
      </div>
        </div>
    
    );
};

export default Appoinmetn;
