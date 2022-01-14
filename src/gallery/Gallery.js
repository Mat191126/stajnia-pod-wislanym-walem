import React from "react";
import galleryImagesSources from "./galleryImagesSources";
import ImageGallery from "react-image-gallery";
import "./imageGalleryStyles/image-gallery.scss";

function Gallery() {

    return (
        <>
        <div id="gallery-content">
            <div id="album-1" className="album">
                <h2 className="album-title">{galleryImagesSources[0].album_name}</h2>
                <div className="gallery-slider">
                    <ImageGallery items={galleryImagesSources[0].images} />
                </div>
            </div>
            <div id="album-2" className="album">
                <h2 className="album-title">{galleryImagesSources[1].album_name}</h2>
                <div className="gallery-slider">
                    <ImageGallery items={galleryImagesSources[1].images} />
                </div>
            </div>
            <div id="album-3" className="album">
                <h2 className="album-title">{galleryImagesSources[2].album_name}</h2>
                <div className="gallery-slider">
                    <ImageGallery items={galleryImagesSources[2].images} />
                </div>
            </div>
            <div id="album-4" className="album">
                <h2 className="album-title">{galleryImagesSources[3].album_name}</h2>
                <div className="gallery-slider">
                    <ImageGallery items={galleryImagesSources[3].images} />
                </div>
            </div>
        </div>
        </>
    );
}

export default Gallery;