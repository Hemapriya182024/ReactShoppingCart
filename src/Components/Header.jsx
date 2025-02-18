import React, { useEffect, useState } from 'react';
import Cart from './Cart';

// Header Component
const Header = ({ productCount }) => {
  // Initialize 'isScroll' state variable to false and provide 'setIsScroll' function to update it.
  const [isScroll, setIsScroll] = useState(false);

  // Add an event listener to update 'isScroll' state based on window scroll position
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <header className={`navbar navbar-expand-lg navbar-light bg-light ${isScroll ? 'scrolled' : ''}`}>
      <div className='container'>
        <a className="navbar-brand" href="#">FashionHub</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">All Clothing</a></li>
                <li><a className="dropdown-item" href="#!">Dresses</a></li>
                <li><a className="dropdown-item" href="#!">Tops</a></li>
                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
              </ul>
            </li>
          </ul>
          <Cart productCount={productCount} />
        </div>
      </div>
    </header>
  );
}

export default Header;
