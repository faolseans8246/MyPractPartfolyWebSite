import React from "react";
import './MyPartfoly.css';

import MyImage              from '../../../docs/taxlangan_shaxsiy.jpg'
import {SiGithub, SiGitlab} from "react-icons/si";
import {LiaLinkedin}        from "react-icons/lia";
import {FaLinkedin}         from "react-icons/fa";


function MyPartfolyFunc() {

    return (

        <div className="partfoly-container">

            <div className="main-text-part">
                <h3 className="main-partfoly-text">My resume and partfoly</h3>
            </div>

            <div className="resume-parts">

                <div className="about-my">

                    <div className="partfoly-image">
                        <img src={MyImage} alt="" className="my-partf-img"/>
                    </div>

                    <div className="about-my-text">

                        <div className="part-passport">
                            {/* bo'limlar */}
                            <div className="about-line">
                                <h3 className="about-enter">Lastname: </h3>
                                <p className="about-my-note">KHamroev</p>
                            </div>

                            {/* bo'limlar */}
                            <div className="about-line">
                                <h3 className="about-enter">Firstname: </h3>
                                <p className="about-my-note">Feruzbek</p>
                            </div>

                            {/* bo'limlar */}
                            <div className="about-line">
                                <h3 className="about-enter">Birth date: </h3>
                                <p className="about-my-note">01-02-2002</p>
                            </div>

                            {/* bo'limlar */}
                            <div className="about-line">
                                <h3 className="about-enter">Address: </h3>
                                <p className="about-my-note">Kushrabot in Samarkand</p>
                            </div>

                            {/* bo'limlar */}
                            <div className="about-line">
                                <h3 className="about-enter">Country: </h3>
                                <p className="about-my-note">Uzbekistan</p>
                            </div>
                        </div>

                        {/* partfolyoning linklari bilan ishlash qismi */}
                        <div className="part-partfoly-link">

                            <a href="http://www.github.com/faolseans8246" target="_blank" className="link-partfoly-me">
                                <div className="link-partfoly">
                                    <SiGithub className="icon-parfoly" style={{color: "black"}}/>
                                    <h4 className="text-partfoly-icon">GitHub</h4>
                                </div>
                            </a>

                            <a href="http://www.gitlab.com/faolseans" target="_blank" className="link-partfoly-me">
                                <div className="link-partfoly">
                                    <SiGitlab className="icon-parfoly" style={{color: "#f88802"}}/>
                                    <h4 className="text-partfoly-icon">GitLab</h4>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/feruzbek-khamroev-b411a5297" target="_blank" className="link-partfoly-me">
                                <div className="link-partfoly">
                                    <FaLinkedin className="icon-parfoly" style={{color: "#6591f8"}}/>
                                    <h4 className="text-partfoly-icon">LinkedIn</h4>
                                </div>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="my-partf">
                    {/* part of my school */}
                    <div className="part-of-resume">

                        <h4 className="study-main-text">School</h4>

                        <p className="study-body-text">
                            From 2009 to 2020, I studied at school No. 58 of Koshrabot district,
                            Samarkand region. During my 11-year education there, I mastered school
                            textbooks perfectly
                        </p>

                    </div>

                    {/* Part of my university */}
                    <div className="part-of-resume">
                        <h4 className="study-main-text">University</h4>

                        <p className="study-body-text">
                            From 2020 to 2024, I studied at the Faculty of Software
                            Engineering of the Tashkent University of Information Technologies
                            named after Muhammad al-Khorazmi, and now I have a higher education.
                        </p>
                    </div>
                </div>


            </div>

        </div>

    )

}

export default MyPartfolyFunc;