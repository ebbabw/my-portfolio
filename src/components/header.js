import React from 'react'
import '../styling/navbar.css'

export const Header = () => {

  

    return (

        <div class="navbar">
            <div class="logo">EBW</div>
            <div class="toggle-botton">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <div class="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                </ul>
            </div>   
    
      </div>
  
    )
  
}
