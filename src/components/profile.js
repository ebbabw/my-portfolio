import React from 'react'
import styled from 'styled-components/macro'

export const Profile = () => {

    return (

    <ProfileContainer>

        <ContentContainer>
            <ImageContainer>
            <img src="../assets/me2.jpg" alt="Me" />
            </ImageContainer>
        </ContentContainer>

        <ContentContainer>
            <p>Profile info</p>
        </ContentContainer>



    </ProfileContainer>


)

}


const ProfileContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: center;
   margin-top: 100px;
   position: absolute;
   width: 100%;
   height: 600px;
   background-color: lightblue;
   
`


const ContentContainer = styled.div`
   margin: 10px;
   width: 250px;
   height: 300px;
   background-color: green; 
`



const ImageContainer= styled.img`

    background-size cover
   
`
