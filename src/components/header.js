import React from 'react'
import styled from 'styled-components/macro'


export const Header = () => {

    return (

        <HeaderContainer>
            
         <div>

              <Title>HERE GOES NOTHING!!!</Title>

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
   width: 100%;
   hight: 200px;
   background-color: lightblue;
   
`

const Title = styled.h1`
   font-size: 20px;
   width: 100%;
   text-align: center;
   height: 40px;
   color: yellow;
`