import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import bg from '../../assets/images/appointment.png';
import { useNavigate } from 'react-router-dom';

const Appoinnment = () => {
    const navigate = useNavigate();
  const reDirct = ()=>{
    navigate('/appointment');
  }
    return (
        <section style={{background:`url(${bg})`}} className='lg:flex items-center justify-start mt-20'>
            <div className='lg:flex-1'>
                <img src={doctor} alt="" className='lg:mt-[-200px] lg:w-full w-1/2'/>
            </div>
            <div className='flex-1 lg:mr-48 m-10 reletive'>
                <h2 className='text-secondary text-xl mb-4 text-start'>Appointment</h2>
                <h3 className='lg:text-5xl text-2xl text-white mb-4 text-start'>Make an appointment Today</h3>
                <p className='text-xl text-white mb-4 text-start'>It is a long established fact that a reader will 
                be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white   font-bold mb-5 " onClick={reDirct}>Get Started</button>
            </div>
        </section>
    );
};

export default Appoinnment;