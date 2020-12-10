import React from 'react'
import styled from 'styled-components/macro'





export const Projects = () => {

    return (

        <IntroContainer> 
               
           <ContentContainer><p>hej</p></ContentContainer>   
           <ContentContainer><p>hej</p></ContentContainer>   
           <ContentContainer><p>hej</p></ContentContainer>   
           <ContentContainer><p>hej</p></ContentContainer>   
  
        </IntroContainer>
       
    )
  
}



const IntroContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: center;
   margin-top: 800px;
   position: absolute;
   width: 100%;
   height: 300px;
   background-color: lightblue;
   
`



const ContentContainer = styled.div`
   margin: 10px;
   width: 200px;
   height: 200px;
   background-color: green; 
`





