import React                          from "react";
import './MyOtherSkillPage.css'
import {BiArrowBack}                                        from "react-icons/bi";
import {SiGit, SiGithub, SiGitlab, SiPostman, SiTypescript} from "react-icons/si";
import {AiFillFileExcel} from "react-icons/ai";
import {BsFileWord} from "react-icons/bs";
import {FaFileWord} from "react-icons/fa";

function OtherSkillFunc({onPageChange}) {

    return (

        <div className="otherskill-container">

            {/* back button */}
            <div className="back-to-skill-page back-top">
                <a href="#" className="back-link" onClick={() => onPageChange("back-skill")}>
                    <BiArrowBack  className="Back-icon"/>
                    {/*<p className="back-text">Back</p>*/}
                </a>
            </div>

            {/* Skill texnology typer */}
            <div className="otherskill-line">

                <div className="type-text">
                    <h2 className="text-t">Web services</h2>
                </div>

                <div className="otherskill-texnologies">

                    {/* Part of Git */}
                    <div className="otherskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="otherlogo-tex">
                            <SiGit style={{color: "#FF6200FF", display: "inline", marginRight: "25px", fontSize: "30px", paddingTop: "10px", paddingLeft: "5px"}}/>
                            <h3 className="othermain-tex">Git</h3>
                        </div>

                        <div className="othertext-tex">
                            Bu qismda Git texnologiyasi bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">

                        </div>

                    </div>

                    {/* Part of Github */}
                    <div className="otherskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="otherlogo-tex">
                            <SiGithub style={{color: "white", display: "inline", marginRight: "25px", fontSize: "30px", paddingTop: "10px", paddingLeft: "5px"}}/>
                            <h3 className="othermain-tex">GitHub</h3>
                        </div>

                        <div className="othertext-tex">
                            Bu qismda GitHub texnologiyasi bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">

                        </div>

                    </div>

                    {/* Part of GitLab */}
                    <div className="otherskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="otherlogo-tex">
                            <SiGitlab style={{color: "#FF8000FF", display: "inline", marginRight: "25px", fontSize: "30px", paddingTop: "10px", paddingLeft: "5px"}}/>
                            <h3 className="othermain-tex">GitLab</h3>
                        </div>

                        <div className="othertext-tex">
                            Bu qismda GitLab texnologiyasi bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">

                        </div>

                    </div>

                    {/* Part of PostMan */}
                    <div className="otherskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="otherlogo-tex">
                            <SiPostman style={{color: "#FF8000FF", display: "inline", marginRight: "25px", fontSize: "30px", paddingTop: "10px", paddingLeft: "5px"}}/>
                            <h3 className="othermain-tex">PostMan</h3>
                        </div>

                        <div className="othertext-tex">
                            Bu qismda Postman texnologiyasi bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">

                        </div>

                    </div>

                    {/* Part of Excel */}
                    <div className="otherskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="otherlogo-tex">
                            <AiFillFileExcel style={{color: "#32f802", display: "inline", marginRight: "25px", fontSize: "30px", paddingTop: "10px", paddingLeft: "5px"}}/>
                            <h3 className="othermain-tex">Excel</h3>
                        </div>

                        <div className="othertext-tex">
                            Bu qismda Excel texnologiyasi bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">

                        </div>

                    </div>

                    {/* Part of Office applications */}
                    <div className="otherskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="otherlogo-tex">
                            <FaFileWord style={{color: "#043ae8", display: "inline", marginRight: "25px", fontSize: "30px", paddingTop: "10px", paddingLeft: "5px"}}/>
                            <h3 className="othermain-tex">Word</h3>
                        </div>

                        <div className="othertext-tex">
                            Bu qismda Word texnologiyasi bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">

                        </div>

                    </div>

                </div>

            </div>


            {/* back button */}
            {/*<div className="back-to-skill-page back-down">*/}
            {/*    <a href="#" className="back-link">*/}
            {/*        <BiArrowBack  className="Back-icon"/>*/}
            {/*        /!*<p className="back-text">Back</p>*!/*/}
            {/*    </a>*/}
            {/*</div>*/}

        </div>

    )

}

export default OtherSkillFunc;