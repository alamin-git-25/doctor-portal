import React from 'react';

const ReviewDetals = ({person}) => {
    return (
        <div className='card shadow-2xl lg:w-[385px] lg:h-[270px] p-10'>
            <p className='mb-5'>{person.disc}</p>
            <div className='flex'>
                <img src={person.img} alt="" className='lg:w-[75px] lg:h-[75px] mr-4'/>
                <div className='flex flex-col  justify-center'>
                <p className='text-xl'>{person.name}</p>
                <p>{person.add}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetals;