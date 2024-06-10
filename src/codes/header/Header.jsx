import React, {useState, useEffect} from "react";
import './Header.css'

// import LogoImg from '../../images/logoImage.jpg'
import LogoImg from '../../images/logo.jpg'
import {AiFillSun} from "react-icons/ai";
import {GiUsaFlag} from "react-icons/gi";

function headerFunc({onPageChange}) {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentTime, setCurrentTime] = useState(new Date());

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const timerID = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timerID);
    }, []);


    // Soat bilan ishlas qismi
    const formatTime = (date) => {
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    // kalendar bilan ishlash qismi
    const formatDate = (date) => {
        let day = date.getDate().toString().padStart(2, '0');
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let year = date.getFullYear();
        let weekday = date.toLocaleDateString('uz-UZ', { weekday: 'long' });
        return `${day}-${month}-${year}, ${weekday}`;
    };



    return (
        <div className="header-container">

            <div className="part-of-logo">

                <div className="main-logo">
                    <img src={LogoImg} alt="logo image" className="logo-image"/>
                </div>

            </div>

            <div className="menu-buttons">

                <p className="menue-buttons">
                    <a href="#" className="menu-button" onClick={() => onPageChange("home")}>Home</a>
                    <a href="#" className="menu-button" onClick={() => onPageChange("skills")}>Skills</a>
                    <a href="#" className="menu-button" onClick={() => onPageChange("partfoly")}>Partfolyo</a>
                    <a href="#" className="menu-button" onClick={() => onPageChange("gallery")}>Gallery</a>
                    <a href="#" className="menu-button" onClick={() => onPageChange("services")}>Service</a>
                    <a href="#" className="menu-button" onClick={() => onPageChange("news")}>News</a>
                    {/*<a href="#" className="menu-button" onClick={() => onPageChange("contacts")}>Contact</a>*/}
                    {/*<a href="#" className="menu-button" onClick={() => onPageChange("support")}>Support</a>*/}
                    <a href="#" className="menu-button" onClick={() => onPageChange("about")}>About</a>
                </p>

            </div>

            <div className="action-part">

                <div className="time-data">
                    <div className="time">{formatTime(currentTime)}</div>
                    <div className="date">{formatDate(currentTime)}</div>
                </div>

                <div className="function-part">

                    <div className="light-func">
                        <buttom className="click-night-light">
                            <AiFillSun className="light-night"/>
                        </buttom>

                        <p className="lang-text">USA</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default headerFunc;