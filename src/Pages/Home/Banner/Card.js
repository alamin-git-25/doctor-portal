import React from 'react';
import img from '../../../assets/icons/clock.svg'
import img2 from '../../../assets/icons/marker.svg'
import img3 from '../../../assets/icons/phone.svg'
import CardDetails from './CardDetails';

const Card = () => {
  const data = [
    {_id: 1, img:img, title:'Opening Hours', disc:'24/7 open',bg:'bg-gradient-to-r from-primary to-secondary'},
    {_id: 2, img:img2, title:'Visit Our Location', disc:'68/7 south city',bg:'bg-[#3A4256]'},
    {_id: 3, img:img3, title:'Contact Us', disc:'+122-58-39',bg:'bg-gradient-to-r from-primary to-secondary'},
  ]
    return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10'>
        {
          data.map(card =><CardDetails card={card} key={card._id}></CardDetails>)
        }
      </div>
    );
};

export default Card;