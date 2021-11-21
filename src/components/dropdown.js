import React from 'react'
import '../styling/navbar.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'


export const Dropdown = () => {
  
    return (

        <div class="navbar-links">
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


        
)

}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
      background-color: lightblue;
    }
`;
