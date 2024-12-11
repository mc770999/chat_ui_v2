

import React from "react";
import useImageReplace from "../../hooks/useImageReplace";


 function ImageSlider() {
   const { imageSrc} = useImageReplace()
 
   return (
     <div className="image-slider">
       <img
         src={imageSrc}
         alt={imageSrc}
         className="fade-in-out"
         />
     </div>
   );
 }
 export default ImageSlider