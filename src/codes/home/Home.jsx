import React, {useState} from "react";
import './Home.css'

import HomeImg from '../../images/ImageHomeTwo.jpg';
import {BiDislike, BiLike} from "react-icons/bi";

function homeFunc() {


    // Sanash qismini tashkillashtiruvchi o'zgaruvchilarni shakllantirish
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [likeCount, setLikeCount] = useState(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dislikeCount, setDislikeCount] = useState(0)


    // Like qiymatini bittaga oshirish
    const handleLike = () => {
        setLikeCount(likeCount + 1)
    }

    // Dislike qiymatini bittaga oshirish
    const handleDislike = () => {
        setDislikeCount(dislikeCount + 1)
    }


    return (
        <div className="Home-container">

            {/* Text matn bilan ishlash qismi */}
            <div className="place">
                <div className="text-place">

                    {/* Owner ismi qismi */}
                    <h1 className="owner-name">Feruzbek KHamroev</h1>

                    {/* Home outline qismi bilan ishlash */}
                    <h3 className="my-career">My home page</h3>

                    {/* Home menusidagi text qismi bilan ishlash */}
                    <p className="feedback">
                        Hi, my neme is Feruzbek and surname is KHamroev. I am 22 years old, I was born in Kushrabot
                        in Samarkand. I have lived in Tashkent since 2020 and I study here.
                        I am software and hardware engineering. I had studied in school since 2009 and I finished there
                        in 2020.
                        I am studying University now and My university is Tashkent University of Information Technology
                        (TUIT)
                        My dagree is bacholor and 4 graduate. My specialist is Software engineer. I am programmer and
                        this job for future.
                        This is job develop and interesting. I have studied in Universiy since 2020 and I will finish
                        this year.
                    </p>

                </div>

                {/*  Like place  */}
                <div className="like-place">

                    {/* Likelar bilan ishlash qismi */}
                    <div className="part-of-like">

                        {/* Likelarni sanash qismi */}
                        <div className="like-x">
                            <button className="add-like" onClick={handleLike}>
                                <BiLike className="like-i like"/>
                            </button>
                            <p className="like-count">{likeCount}</p>
                        </div>

                        {/* Dislikelarni sanash qismi */}
                        <div className="like-x">
                            <button className="add-like" onClick={handleDislike}>
                                <BiDislike className="like-i dislike"/>
                            </button>
                            <p className="like-count">{dislikeCount}</p>
                        </div>

                    </div>

                    {/* Coimmentlar bilan ishlash qismi */}
                    <div className="commnet-part">

                        <p className="text-notes">
                            Pastdagi mayonga o'z fikringizni yozib qoildiring!
                        </p>

                        <form action="" className="comment-form">

                            {/* notes place and user write your opinions here */}
                            <div className="input-notes">
                                <input className="input-place" placeholder="Enter your opinions about me and my web site..." type="text"/>
                            </div>

                            {/* send notes when user writre all notes */}
                            <div className="send-notes">

                                <button className="send-place">
                                    Send
                                </button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>


            {/* Image qismi bilan ishlash qismi */}
            <div className="image-place">
                <img src={HomeImg} alt="" className="home-image"/>
            </div>

        </div>
    )

}

export default homeFunc;