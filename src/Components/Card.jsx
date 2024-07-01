import React, { useState } from 'react';

// Card Component
const Card = ({ setProductCount, img, title, price }) => {
  const [btnStatus, setBtnStatus] = useState(false);

  // Function to update button and cart status
  const change = () => {
    setBtnStatus((prevStatus) => {
      const newStatus = !prevStatus;
      setProductCount((count) => count + (newStatus ? 1 : -1));
      return newStatus;
    });
  };

  return (
    <div className='card col-xl-4 col-lg-6'>
      <div className='card-content'>
        <img src={img} alt={title} />
        <h4 className='mt-3'>{title}</h4>
        <p>{price}</p>
        <button onClick={change} className={btnStatus ? 'btn border-dark' : 'btn btn-dark'}>
          {btnStatus ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

export default Card;
