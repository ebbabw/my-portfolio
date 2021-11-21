import React, { useState } from 'react'
import styled from 'styled-components/macro'
import '../styling/navbar.css'
import { Link } from 'react-router-dom';
import { Dropdown } from 'components/dropdown'


export const Header = () => {
  const [showmenu, setShowmenu] = useState(false);

        return (

            

        <div class="navbar">
           <div class="logo">EBW</div>

             <div class="toggle-botton" onClick={() => {setShowmenu(!showmenu)}} >

                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>

            </div>

            {showmenu &&  <Dropdown /> }

            <div class="navbar-links2">

                <ul>
                    <li>
                        <StyledLink to="/">Home</StyledLink>
                    </li>

                    <li>
                        <StyledLink to="/about">About</StyledLink>
                    </li>

                    <li>
                        <StyledLink to="/work">Work</StyledLink>
                    </li>
                </ul>


            </div> 
            </div>

            


    ) 

}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
      background-color: lightblue;
    }
`;
