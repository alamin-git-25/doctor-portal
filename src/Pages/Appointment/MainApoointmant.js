import React, { useState } from 'react';
import Appoinmetn from './Appoinmetn';
import AvailableApoo from './AvailableApoo';
import Footer from '../Footer/Footer';

const MainApoointmant = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='w-[100%] mx-auto overflow-hidden no-scroll'>
            <Appoinmetn date={date} setDate={setDate}/>
            <AvailableApoo date={date}/>
            <Footer/>
        </div>
    );
};

export default MainApoointmant;