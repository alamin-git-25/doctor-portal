import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import DisplayApp from './DisplayApp';
import BookingModal from './BookingModal';

const AvailableApoo = ({date}) => {
    const [appointments, setAppointment] = useState([]);
    const [Treatment, setTritment] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setAppointment(data))

    },[])
    return (
        <div className='mt-12'>
           <h3 className='text-2xl text-center text-green-600'> Available Appoinmet :{format(date, 'PP')}</h3>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center w-[80%] mx-auto my-10 '>
            {
                appointments.map(appo=><DisplayApp data={appo} key={appo._id }setTritment={setTritment}></DisplayApp>)
            }
           </div>
           {
            Treatment && <BookingModal Treatment={Treatment} key={Treatment._id} date={date} setTritment={setTritment}></BookingModal>
           }
        </div>
    );
};

export default AvailableApoo;