import React from 'react';
import img1 from '../../assets/images/people1.png';
import img2 from '../../assets/images/people2.png';
import img3 from '../../assets/images/people3.png';
import quma from '../../assets/icons/quote.svg';
import ReviewDetals from './ReviewDetals';

const Review = () => {
const data = [
    {_id:1, img:img1, name:'Winson Herry',add:'California', disc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'},
    {_id:2, img:img2, name:'Asmo Rose',add:'California', disc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'},
    {_id:3, img:img3, name:'Winson Herry',add:'California', disc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'},
]
    return (
        <section className='w-[90%] mx-auto'>
            <div className='my-20 flex justify-between items-center'><h1 className='lg:text-4xl text-2xl'>What Our Patients Says</h1>
            <img src={quma} alt="" className='lg:w-[192px] lg:h-[152px] w-[98px] h-[79px]'/>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-[80%] mx-auto mb-40'>
                {
                    data.map(person =><ReviewDetals key={person._id} person={person}></ReviewDetals>)
                }
            </div>
        </section>
    );
};

export default Review;