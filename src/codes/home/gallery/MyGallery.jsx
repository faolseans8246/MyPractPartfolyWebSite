import React from "react";
import './MyGallery.css'

import ImageOne from '../../../galleryImages/5402071640432565674_121.jpg'
import ImageTwo from '../../../galleryImages/5411350178541197690_121.jpg'
import ImageThree from '../../../galleryImages/5411350178541197685_121.jpg'
import ImageFour from '../../../galleryImages/5411350178541197686_121.jpg'
import ImageFive from '../../../galleryImages/5411350178541197688_121.jpg'
import ImageSex from '../../../galleryImages/5411350178541197689_120.jpg'
import ImageSeven from '../../../galleryImages/5411350178541197693_121.jpg'
import ImageEight from '../../../galleryImages/5411350178541197695_120.jpg'
import ImageNine from '../../../galleryImages/5411350178541197694_121.jpg'


function MyGalleryFunc() {

    return (
        <div className="gallery-container">

            <div className="gallery-main-text">
                <h3 className="gallery-text">My Gallery</h3>
            </div>

            <div className="images-gallery">

                {/* first image */}
                <div className="image-part">

                    <div className="own-img">
                        <img src={ImageOne} alt="" className="one-img"/>
                    </div>

                    <div className="img-text">
                        Diplom himoya natijasi.
                    </div>

                </div>

                {/* second image */}
                <div className="image-part">

                    <div className="own-img">
                        <img src={ImageTwo} alt="" className="one-img"/>
                    </div>

                    <div className="img-text">
                        O'z hoxishim bilan chiqmaganman
                    </div>

                </div>

                {/* third image */}
                <div className="image-part">

                    <div className="own-img">
                        <img src={ImageThree} alt="" className="one-img"/>
                    </div>

                    <div className="img-text">
                        PDP University with my uncle son
                    </div>

                </div>

                {/* forth image */}
                <div className="image-part">

                    <div className="own-img">
                        <img src={ImageFour} alt="" className="one-img"/>
                    </div>

                    <div className="img-text">
                        First image
                    </div>

                </div>

                {/* fifth image */}
                <div className="image-part">

                    <div className="own-img">
                        <img src={ImageFive} alt="" className="one-img"/>
                    </div>

                    <div className="img-text">
                        With my cource-mate in TUIT
                    </div>

                </div>

                {/* sexth image */}
                <div className="image-part">

                    <div className="own-img">
                        <img src={ImageSex} alt="" className="one-img"/>
                    </div>

                    <div className="img-text">
                        I am at work in Compass
                    </div>

                </div>

                {/* sevnth image */}
                <div className="image-part">

                    <div className="own-img">
                        <img src={ImageSeven} alt="" className="one-img"/>
                    </div>

                    <div className="img-text">
                        meeting with Bekhzod KHoshimov
                    </div>

                </div>

                {/* eight image */}
                <div className="image-part">

                    <div className="own-img">
                        <img src={ImageEight} alt="" className="one-img"/>
                    </div>

                    <div className="img-text">
                        he is my lovely nephew.
                    </div>

                </div>

                {/* ninth image */}
                <div className="image-part">

                    <div className="own-img">
                        <img src={ImageNine} alt="" className="one-img"/>
                    </div>

                    <div className="img-text">
                        meeting with Akmal Kadirov (KadirovDev)
                    </div>

                </div>

            </div>

        </div>
    )

}

export default MyGalleryFunc;