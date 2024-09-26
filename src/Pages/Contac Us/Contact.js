import React from 'react';
import bg from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{background:`url(${bg})`}} className='flex justify-center items-center'>
            <div>
                <h1 className='text-2xl text-secondary text-center m-5'>Contact Us</h1>
                <h2 className='text-4xl text-white text-center mb-10'>Stay connected with us</h2>
                <form action="" className='lg:w-[450px] w-[359px] lg:h-[468px] h-[475px] flex flex-col  items-center'>
                    <input type="email" name="" id="" placeholder='Email Address'className='w-full mb-5 px-2 h-[48px] rounded'/>
                    <input type="text" placeholder='Subject' className='w-full mb-5 h-[48px] px-2 rounded'/>
                    <textarea name="" id="" placeholder='Your message' className='w-full mb-5 h-[136px] px-2 rounded'></textarea>
                    <input type="submit" value="Submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-bold w-[120px] h-[48px]"/>
                </form>
            </div>
        </section>
    );
};

export default Contact;