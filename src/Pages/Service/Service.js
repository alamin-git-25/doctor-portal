import React from 'react';
import img1 from '../../assets/images/fluoride.png'
import img2 from '../../assets/images/cavity.png'
import img3 from '../../assets/images/whitening.png'
import LittleCard from './LittleCard';

const Service = () => {
    return (
        <div>
            <h1 className='text-2xl text-secondary text-center mb-10'>Our Service</h1>
            <h1 className='text-4xl text-thard text-center'>Service We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 place-items-center w-[90%] mx-auto'>
                <div className="card bg-base-100 w-[100%] h-[100%]  shadow-2xl">
                    <figure>
                        <img
                            className='mt-14'
                            src={img1}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center">Fluoride Treatment</h2>
                        <p className='text-center'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div className="card bg-base-100  [100%] h-[100%] shadow-2xl">
                    <figure>
                        <img
                            className='mt-14'
                            src={img2}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center">Fluoride Treatment</h2>
                        <p  className='text-center'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div className="card bg-base-100  w-[100%] h-[100%]  shadow-2xl">
                    <figure>
                        <img
                            className='mt-14 w-[100px] h-[100px]]'
                            src={img3}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center">Fluoride Treatment</h2>
                        <p  className='text-center'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
            </div>
            <LittleCard/>

        </div>
    );
};

export default Service;