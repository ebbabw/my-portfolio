
import React from 'react'

import '../styling/slideshow.style.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"


export const Slideshow = () => {
  
     return (

 
          <div class="main-slideshow">
          <div class="container"> 

           <Carousel autoPlay width="600px" height="400px">
                <div>
                    <img height="500px" src="/assets/IMG_4924.jpg" alt="1" />
                    <p className="legend">Legend 1</p>
                </div>

                <div>
                    <img height="500px" src="/assets/IMG_4924.jpg" alt="2" />
                    <p className="legend">Legend 2</p>
                </div>

                <div>
                    <img height="500px" src="/assets/IMG_4924.jpg" alt="3" />
                    <p className="legend">Legend 3</p>
                </div>

                <div>
                    <img height="500px" src="/assets/IMG_4924.jpg" alt="3" />
                    <p className="legend">Legend 3</p>
                </div>

                <div>
                    <img height="500px" src="/assets/IMG_4924.jpg" alt="3" />
                    <p className="legend">Legend 3</p>
                </div>

            </Carousel>




          </div>
          </div>



          )
}



