import React from 'react'

import '../styling/projects-style.css'




export const Projects = () => {

    return (
        

      <div>

         <div className="copy">My work</div>


        <div className="intro-container"> 

     
               
           <div className="project">
           <img class="profile" src="/assets/pexels-negative-space-48606.jpg" alt="code"/>
               <div class="overlay"></div>
               <div class="copy-project">
               <div class="title5">Code</div>
               </div>
            </div>  

            <div className="project">
            <img class="profile" src="/assets/song1.png" alt="gd"/>
                <div class="overlay"></div>
                <div class="copy-project">
               <div class="title5">Graphic Design</div>
            </div>
            </div> 

            <div className="project">
            <img class="profile" src="/assets/IMG_4924.jpg" alt="photog"/>
                <div class="overlay"></div>
                <div class="copy-project">
                <div class="title5">Photography</div>
            </div>
            </div>  

            <div className="project">
            <img class="profile" src="/assets/ebbs.jpeg" alt="Ebba"/>
            <div class="overlay"></div>
            <div class="copy-project">
                <div class="title5">More about me</div>
            </div>
            </div>    
  
        </div>
        </div>
       
    )
  
}






