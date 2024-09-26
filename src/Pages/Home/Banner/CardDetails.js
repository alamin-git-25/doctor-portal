import React from 'react';

const CardDetails = ({card}) => {
    return (
        <div>
             <div className={`card items-center ${card.bg} card-side lg:w-[550px] w-[378px] h-[228px] lg:h-[210px] shadow-xl`}>
  <figure>
    <img
      src={card.img}
      alt="Movie" 
      className='w-[62px] mx-10'
      />
      
  </figure>
  <div className="card-body">
    <h2 className="card-title text-white text-3xl">{card.title}</h2>
    <p className=" text-white text-2xl">{card.disc}</p>
  </div>
</div>
        </div>
    );
};

export default CardDetails;