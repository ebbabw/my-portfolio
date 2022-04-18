
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";


import "../styling/Image-slideshowstyle.css";

import { Header } from "./header";

const images = [
    { url: "/assets/sketchme-c.png" },
    { url: "/assets/sketchme-c.png" },
    { url: "/assets/sketchme-c.png" },
    { url: "/assets/sketchme-c.png" },
    { url: "/assets/sketchme-c.png" },
    { url: "/assets/sketchme-c.png" },
    { url: "/assets/sketchme-c.png" },
  ];
  



export const Slideshow = () => {
    return (
      <div>

          <Header />

          
<div>


<div class="section">

    <div class="title2">
        <div class="copy">
        Code projects 
        </div>

    </div>

    </div>

<div class="slideshow-container">

      <SimpleImageSlider
        width={500}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
      />

</div>

    </div>
          
    

      </div>
    )
};

export default Slideshow;