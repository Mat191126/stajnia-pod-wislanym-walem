import React, { useEffect } from "react";
import galleryImagesSources from "./galleryImagesSources";

//First element index
const FIRST_ELEMENT = 0;

function Gallery() {

    useEffect(() => {
        renderGallery();
    });
    document.addEventListener('DOMContentLoaded', function(event) {
        window.onload = function() {
            renderGallery();
        }
    });

    const renderGallery = function() {
        //Get the main gallery container
        let galleryContainer = document.getElementById("gallery-content");

        if(document.readyState === 'complete') {
            for (let albumIndex = 0; albumIndex < galleryImagesSources.length; albumIndex++) {
                const albumDiv = document.createElement("div");
                    albumDiv.classList.add("album-content");
                const albumTitle = document.createElement("h3");
                    albumTitle.classList.add("album-title");
                    albumTitle.innerText = galleryImagesSources[albumIndex].album_name;
                const albumCover = document.createElement("img");
                    albumCover.classList.add("album-cover");
                    albumCover.alt = "Album cover image";
                    albumCover.src = galleryImagesSources[albumIndex].images[FIRST_ELEMENT].image_url;
                    albumCover.onclick = showImages;
                const imageContainer = document.createElement("div");
                    imageContainer.classList.add("image-container");
                    imageContainer.classList.add("image-container-invisible");

                albumDiv.appendChild(albumTitle);
                albumDiv.appendChild(albumCover);
                albumDiv.appendChild(imageContainer);
                for (let imageIndex = 0; imageIndex < galleryImagesSources[albumIndex].images.length; imageIndex++) {
                    const singleImage = document.createElement("img");
                        singleImage.classList.add("single-image");
                        singleImage.alt = "Album image";
                        singleImage.src = galleryImagesSources[albumIndex].images[imageIndex].image_url;

                    imageContainer.appendChild(singleImage);
                }
                galleryContainer.appendChild(albumDiv);
            }
        }
    }

    function showImages(e) {
        e.preventDefault();
        const imageContainer = e.target.parentElement.getElementsByClassName("image-container")[FIRST_ELEMENT];
        if (imageContainer.classList.contains("image-container-invisible")) {
            imageContainer.classList.remove("image-container-invisible");
        } else {
            imageContainer.classList.add("image-container-invisible");
        }
    };

    return (
        <div id="gallery-content"/>
    );
}

export default Gallery;