import React from "react";
import './MyHardSkillPage.css'
import {FaComputer} from "react-icons/fa6";
import {FaTools} from "react-icons/fa";
import {GrConnect} from "react-icons/gr";
import {BsHddNetwork} from "react-icons/bs";
import {BiArrowBack} from "react-icons/bi";

function MyHardSkillFunc({onPageChange}) {
    return (
        <div className="skills-container">

            {/* back button */}
            <div className="back-to-skill-page back-top" onClick={() => onPageChange("back-skill")}>
                <a href="#" className="back-link">
                    <BiArrowBack  className="Back-icon"/>
                    {/*<p className="back-text">Back</p>*/}
                </a>
            </div>

            <div className="skill-texnologies">

                {/* First line */}
                <div className="skil-texnology">

                    {/* Text bosh qismi bilan ishlash */}
                    <div className="logo-tex">
                        <FaComputer style={{color: "yellow"}} className="log-tex"/>
                        <h3 className="main-tex">Computer texnology</h3>
                    </div>

                    <div className="text-tex">
                        Bu Yerda men o'zimning kompyuter texnologiyalari bilan ishlash
                        skillarimni joylayman.
                    </div>

                </div>

                <div className="skil-texnology">
                    {/* Text bosh qismi bilan ishlash */}
                    <div className="logo-tex">
                        <FaTools style={{color: "yellow"}} className="log-tex"/>
                        <h3 className="main-tex">Computer services</h3>
                    </div>

                    <div className="text-tex">
                        Bu yerda men o'zimning kompyuter extiyot qismlari bilan ishlash
                        skillarimni joylayman.
                    </div>
                </div>

                <div className="skil-texnology">
                    {/* Text bosh qismi bilan ishlash */}
                    <div className="logo-tex">
                        <GrConnect style={{color: "yellow"}} className="log-tex"/>
                        <h3 className="main-tex">Connect lines</h3>
                    </div>

                    <div className="text-tex">
                        Bu yerda men o'zimning qismlarni boglash bilan ishlash
                        skillarimni joylayman.
                    </div>
                </div>

                <div className="skil-texnology">
                    {/* Text bosh qismi bilan ishlash */}
                    <div className="logo-tex">
                        <BsHddNetwork style={{color: "yellow"}} className="log-tex"/>
                        <h3 className="main-tex">Network devices</h3>
                    </div>

                    <div className="text-tex">
                        Bu yerda men o'zimning Internet qurilmalar bilan ishlash
                        skillarimni joylayman.
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MyHardSkillFunc;