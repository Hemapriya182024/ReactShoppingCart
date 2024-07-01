import React from 'react';


const Banner = () => {
 
  const imageUrl = 'https://media.istockphoto.com/id/1212679579/photo/mother-and-daughter-shopping-together-for-clothes-at-outdoor-street-market.webp?b=1&s=170667a&w=0&k=20&c=NIFcnl7YITUeYJOHCf_RGWYkfJJj84sNtz6WXwsNmDA=';

  return (
    <div className='banner-container'>
      <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h2 className='title' >FashionHub</h2>
      
      </div>
    </div>
  );
}

export default Banner;
