import React from 'react';

const DisplayApp = ({ data ,setTritment}) => {
   
    const {name, slot} = data;
    return (
        <div className='mt-10'>
            <div className="card bg-base-100 lg:w-[425px] lg:h-[230px] w-[370px] h-[230px] shadow-xl  app">
                <div className="card-body">
                    <h2 className=" text-2xl text-black text-center">{name}</h2>
                    <p className='text-center'>{slot.length} {slot.length >1 ? 'Spaces' : 'Space'} Available</p>
                    <div className="card-actions justify-center">
                    <label htmlFor="bookin_modal" disabled={slot.length===0} 
                        className="btn bg-gradient-to-r from-primary to-secondary uppercase text-black font-bold"
                        onClick={()=>setTritment(data)}
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayApp;
