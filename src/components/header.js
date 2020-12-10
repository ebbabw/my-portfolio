import React from 'react'
import styled from 'styled-components/macro'



export const Header = () => {

    return (

        <HeaderContainer>
            
         <div>

              <ul>
                  <li><p>Home<p></p></p></li>
                  <li><p>work<p></p></p></li>
                  <li><p>About<p></p></p></li>

              </ul>
            
           </div>
    
        </HeaderContainer>
       
    )
  
}

const HeaderContainer = styled.div`
   position:absolute;
   top. 0;
   width: 100%;
   height: 50px;
   background-color: rgba(202, 172, 174, 0.72);
   
`

