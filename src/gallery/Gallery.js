import React, { useEffect, useState } from "react";
import galleryImagesSources from "./galleryImagesSources";

function Gallery() {
    
    return (
        <div id="gallery-content">
            <img className="album-image" src={galleryImagesSources[0].images[0].image_url} alt="" />
        </div>
    );
}

export default Gallery;