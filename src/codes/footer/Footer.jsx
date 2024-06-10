import React from "react";
import './Footer.css'
import {BiLocationPlus, BiLogoInstagram, BiLogoTelegram, BiLogoWhatsapp}                     from "react-icons/bi";
import {AiFillFacebook, AiFillLinkedin, AiFillTikTok} from "react-icons/ai";
import {
    SiDart,
    SiDiscord,
    SiHtml5,
    SiJavascript,
    SiKotlin,
    SiMicrosoftoutlook,
    SiTypescript
} from "react-icons/si";
import {FaMobileScreen, FaThreads} from "react-icons/fa6";
import {FiMail, FiTwitter}                   from "react-icons/fi";
import {FaCss3, FaJava, FaPython, FaTwitter} from "react-icons/fa";
import {CgCPlusPlus}                         from "react-icons/cg";
import {HiLocationMarker}        from "react-icons/hi";
import {CiLocationOn, CiTwitter} from "react-icons/ci";




function footerPage() {

    return (

        <div className="footer-container">


            {/* Social media bilan ishlash qismi */}
            <div className="content">

                <h3 className="footer-main-text">Social media</h3>

                <p className="messangers">
                    <AiFillLinkedin style={{color: "#63a2e8"}} className="footer-logo"/>
                    <a href="https://www.linkedin.com/in/feruzbek-khamroev-b411a5297" target="_blank"
                       className="text-mess">linkedIn</a>
                </p>

                <p className="messangers">
                    <BiLogoTelegram style={{color: "#05F3EBFF"}} className="footer-logo"/>
                    <a href="https://t.me/feruzbek_khamroev" target="_blank" className="text-mess">Telegram</a>
                </p>

                <p className="messangers">
                    <BiLogoWhatsapp style={{color: "#39F305FF"}} className="footer-logo"/>
                    <a href="https://wa.me/qr/A7DFCVP2NXBZL1" target="_blank" className="text-mess">WhatsApp</a>
                </p>

                <p className="messangers">
                    <SiDiscord style={{color: "#ffffff"}} className="footer-logo"/>
                    <a href="https://www.discord.com/feruzbekkhamroev/" target="_blank"
                       className="text-mess">Discord</a>
                </p>

                <p className="messangers">
                    <BiLogoInstagram style={{color: "#F305C3FF"}} className="footer-logo"/>
                    <a href="https://www.instagram.com/feruzbek_khamroev" target="_blank" className="text-mess">Instagram</a>
                </p>

                <p className="messangers">
                    <FaTwitter style={{color: "#057CF3FF"}} className="footer-logo"/>
                    <a href="http://www.twitter.com/f_khamroev" target="_blank" className="text-mess">Twitter</a>
                </p>

                <p className="messangers">
                    <AiFillFacebook style={{color: "#057CF3FF"}} className="footer-logo"/>
                    <a href="https://www.facebook.com/feruzbek_khamroev.3" target="_blank" className="text-mess">FaceBook</a>
                </p>

                <p className="messangers">
                    <FaThreads style={{color: "#ffffff"}} className="footer-logo"/>
                    <a href="http://www.threads.com/feruzbek_khamroev" target="_blank" className="text-mess">Threads</a>
                </p>

                <p className="messangers">
                    <AiFillTikTok style={{color: "#C077F3FF"}} className="footer-logo"/>
                    <a href="http://www.tiktok.com/feruzbek_khamroev" target="_blank" className="text-mess">TikTok</a>
                </p>

            </div>


            {/* Contact qismi bilan ishlash qismi */}
            <div className="content">

                <h3 className="footer-main-text">Contacts</h3>

                <p className="mobiles">
                <FaMobileScreen style={{color: "#0FE7B4FF"}} className="mobile-logo"/>
                    <h5 className="in-part">Phone: </h5>
                    <p className="out-part">+(998 94) 281-82-46</p>
                </p>

                <p className="mobiles">
                    <FiMail style={{color: "#FF6A00FF"}} className="mobile-logo"/>
                    <h5 className="in-part">E-Mail: </h5>
                    <p className="out-part">feruzbekkhamroev2002@gmail.com</p>
                </p>

                <p className="mobiles">
                    <FiMail style={{color: "#C800FFFF"}} className="mobile-logo"/>
                    <h5 className="in-part">G-Mail: </h5>
                    <p className="out-part">feruzbekhamrayev2002@gmail.com</p>
                </p>

                <p className="mobiles">
                    <SiMicrosoftoutlook style={{color: "#00ffd0"}} className="mobile-logo"/>
                    <h5 className="in-part">Outlook: </h5>
                    <p className="out-part">feruzbekhamrayev2002@outlook.com</p>
                </p>

            </div>


            {/* Texnologiyalar bilan ishlash qismi */}
            <div className="content">
                <h3 className="footer-main-text">Technologies</h3>

                <p className="texnology">
                    <FaJava style={{color: "#00FFFF"}} className="icon-tech"/>
                    <p className="tex-name">Java</p>
                </p>

                <p className="texnology">
                    <CgCPlusPlus style={{color: "#00FFFF"}} className="icon-tech"/>
                    <p className="tex-name">C/C++</p>
                </p>

                <p className="texnology">
                    <FaPython style={{color: "#00FA3CFF"}} className="icon-tech"/>
                    <p className="tex-name">Python</p>
                </p>

                <p className="texnology">
                    <SiJavascript style={{color: "#EFCB09FF"}} className="icon-tech"/>
                    <p className="tex-name">JavaScript</p>
                </p>

                <p className="texnology">
                    <SiTypescript style={{color: "#39B9E8FF"}} className="icon-tech"/>
                    <p className="tex-name">TypeScript</p>
                </p>

                <p className="texnology">
                    <SiKotlin style={{color: "#D602EDFF"}} className="icon-tech"/>
                    <p className="tex-name">Kotlin</p>
                </p>

                <p className="texnology">
                    <SiDart style={{color: "#4f71e3"}} className="icon-tech"/>
                    <p className="tex-name">Dart</p>
                </p>

                <p className="texnology">
                    <SiHtml5 style={{color: "#AEE839FF"}} className="icon-tech"/>
                    <p className="tex-name">HTML</p>
                </p>

                <p className="texnology">
                    <FaCss3 style={{color: "#ED6C02FF"}} className="icon-tech"/>
                    <p className="tex-name">CSS</p>
                </p>

            </div>

            {/* Address qismi bilan ishlash */}
            <div className="content">
                <h3 className="footer-main-text">Address</h3>

                {/* home location */}
                <p className="home-address">
                    <BiLocationPlus style={{color: "#FF002FFF"}} className="home-locate"/>
                    <h3 className="home-text">Home address</h3>
                    <p className="add-h">
                        O'zbekiston Respubliasi, Samarqand viloyati, Qo'shrabot tumani,
                        Oqchobsoy MFY, Bozorjoy qishlog'i, 10-uy
                    </p>
                </p>

                {/* Live location */}
                <p className="home-address">
                    <HiLocationMarker style={{color: "#FF4D00FF"}} className="home-locate"/>
                    <h3 className="home-text">Live address</h3>
                    <p className="add-h">
                        O'zbekiston Respubliasi, Toshkent shahar, Bektemir tumani,
                        Oltintopgan MFY, Barkamol ko'chasi, 12-uy
                    </p>
                </p>

                {/* Study address */}
                <p className="home-address">
                    <CiLocationOn style={{color: "#C809F3FF"}} className="home-locate"/>
                    <h3 className="home-text">Study address</h3>
                    <p className="add-h">
                        O'zbekiston Respubliasi, Toshkent shahar, Yunusobod tumani,
                        Amir Temur ko'chasi, 108-uy
                    </p>
                </p>

            </div>

        </div>

    )

}

export default footerPage;