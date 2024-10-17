import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h>Indulge in the Finest Cuisine with Lynn's Culinary Magic.</h>
            <p>Order your favorite food here</p>
            <a href="#explore-menu"><button className='buttonwl'>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header