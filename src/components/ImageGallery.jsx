import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import imagesURL from "./GalleryReferences";

function Gallery()
{
   return(
       <div className="imageGallery"> 
              <h2>Our Builds</h2>
        <ImageGallery items={imagesURL} 
        showPlayButton={false}
        showThumbnails={false}
        lazyLoad={true}
        />    
       </div>

   ) ;
}


export default Gallery;