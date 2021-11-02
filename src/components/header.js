import React from 'react'
import styled from 'styled-components/macro'



export const Header = () => {

    return (

        <HeaderContainer>
            
         <HeaderWrapper>

              <ul>
                  <li><p>Home<p></p></p></li>
                  <li><p>work<p></p></p></li>
                  <li><p>About<p></p></p></li>

              </ul>
            
           </HeaderWrapper>
    
        </HeaderContainer>
       
    )
  
}

const HeaderContainer = styled.div`
   display: flex;
   justify-content: center;
   position:absolute;
   top. 0;
   width: 100%;
   height: 50px;
   background-color: rgba(202, 172, 174, 0.72);
   
`

const HeaderWrapper = styled.div`
   display: flex;
   justify-content: center;
   justify-content: space-evenly;
   font-size: 12px;
   text-decoration: none;
   position: absolute;
   top. 0;
   width: 80%;
   height: 50px;
   background-color: rgba(202, 172, 174, 0.72);
   
`
