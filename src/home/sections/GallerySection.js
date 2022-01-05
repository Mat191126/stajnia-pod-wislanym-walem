import React from 'react';
import Image1 from '../../assets/images/galleryImages/horse_1.jpg';
import Image2 from '../../assets/images/galleryImages/horse_2.jpg';
import Image3 from '../../assets/images/galleryImages/group_picture_vertical.jpg';
import Image4 from '../../assets/images/galleryImages/group_picture.jpg';
import Image5 from '../../assets/images/galleryImages/girl_on_horse.jpg';
import Image6 from '../../assets/images/galleryImages/horse_3.jpg';


function GallerySection() {


    return (
        <>
            <div id="gallery_section">
                <div class="gallery">
                    <figure class="gallery-item gallery-item-1">
                        <img src={Image1} alt="Gallery image 1" class="gallery-img"/>
                    </figure>
                    <figure class="gallery-item gallery-item-2">
                        <img src={Image2} alt="Gallery image 2" class="gallery-img"/>
                    </figure>
                    <figure class="gallery-item gallery-item-3">
                        <img src={Image3} alt="Gallery image 3" class="gallery-img"/>
                    </figure>
                    <figure class="gallery-item gallery-item-4">
                        <img src={Image4} alt="Gallery image 4" class="gallery-img"/>
                    </figure>
                    <figure class="gallery-item gallery-item-5">
                        <img src={Image5} alt="Gallery image 5" class="gallery-img"/>
                    </figure>
                    <figure class="gallery-item gallery-item-6">
                        <img src={Image6} alt="Gallery image 6" class="gallery-img"/>
                    </figure>
                </div>
            </div>
        </>
    );
}

export default GallerySection;