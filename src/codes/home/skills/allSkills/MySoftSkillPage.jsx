import React from "react";
import './MySoftSkillPage.css'
import {FaComputer, FaXmarksLines}           from "react-icons/fa6";
import {FaAndroid, FaFlask, FaJava, FaTools} from "react-icons/fa";
import {
    SiApache,
    SiApachetomcat, SiArduino, SiBootstrap, SiC, SiCss3, SiDart, SiDjango, SiFastapi, SiFlutter,
    SiHibernate, SiHtml5, SiJavascript, SiJson, SiMariadb, SiMongodb, SiMui, SiMysql, SiPostgresql, SiPyg,
    SiPython, SiR, SiReact, SiSass,
    SiSpring,
    SiSpringboot,
    SiSpringsecurity, SiSqlite, SiTypescript
}                                            from "react-icons/si";
import {RiH2}            from "react-icons/ri";
import {GiAnt, GiCancel} from "react-icons/gi";
import {PiFlask}         from "react-icons/pi";
import {
    BiArrowBack,
    BiLogoAngular,
    BiLogoCPlusPlus,
    BiLogoFlask,
    BiLogoJavascript,
    BiLogoNodejs,
    BiLogoTypescript,
    BiLogoVuejs, BiText
} from "react-icons/bi";
import {TbBrandKotlin, TbBrandNextjs} from "react-icons/tb";
import {FcCancel, FcCdLogo}           from "react-icons/fc";
import {BsBack, BsFiletypeXml}        from "react-icons/bs";
import {DiAndroid} from "react-icons/di";

function MySoftSkillFunc({onPageChange}) {
    return (
        <div className="softskills-container">

            {/* back button */}
            <div className="back-to-skill-page back-top">
                <a href="#" className="back-link" onClick={() => onPageChange("back-skill")}>
                    <BiArrowBack  className="Back-icon"/>
                    {/*<p className="back-text">Back</p>*/}
                </a>
            </div>

            {/* Skill texnology typer */}
            <div className="skill-line">

                <div className="type-text">
                    <h2 className="text-t">Back-End Texnologies</h2>
                </div>

                <div className="softskill-texnologies">

                    {/* part of Java */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <FaJava style={{color: "#64EADEFF"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">Java</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda Java dasturlash tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            <SiSpring style={{color: "green", fontSize: "25px"}}/>
                            <SiSpringboot style={{color: "green", fontSize: "25px"}}/>
                            <SiHibernate style={{color: "#87324AFF", fontSize: "25px"}}/>
                            <SiApachetomcat style={{color: "#fb0148", fontSize: "25px"}}/>
                            <SiApache style={{color: "#c44edc", fontSize: "25px"}}/>
                            <SiSpringsecurity style={{color: "green", fontSize: "25px"}}/>
                        </div>
                    </div>

                    {/* part of Kotlin */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <TbBrandKotlin style={{color: "#C809F3FF"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">Kotlin</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda Kotlin dasturlash tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            <SiSpring style={{color: "green", fontSize: "25px"}}/>
                            <SiSpringboot style={{color: "green", fontSize: "25px"}}/>
                            <SiHibernate style={{color: "#87324AFF", fontSize: "25px"}}/>
                            <SiApachetomcat style={{color: "#fb0148", fontSize: "25px"}}/>
                            <SiApache style={{color: "#c44edc", fontSize: "25px"}}/>
                            <SiSpringsecurity style={{color: "green", fontSize: "25px"}}/>
                        </div>
                    </div>

                    {/* part of Dart */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <SiDart style={{color: "#2C59E6FF"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">Dart</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda Dart dasturlash tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            <SiFlutter style={{color: "#587bf1", fontSize: "25px"}}/>
                            <DiAndroid style={{color: "#45ee0c", fontSize: "25px"}}/>

                        </div>
                    </div>

                    {/* part of C/C++ */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <BiLogoCPlusPlus style={{color: "#2E5BF3FF"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">C++/C</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda C++ va C dasturlash tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            <SiC style={{color: "#00FFE1FF", fontSize: "25px"}}/>
                            <SiArduino style={{color: "#00FFE1FF", fontSize: "25px"}}/>
                        </div>
                    </div>

                    {/* Part of Python */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <SiPython style={{color: "#3c67f1"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">Python</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda Python dasturlash tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            <SiDjango style={{color: "#1ED2C3FF", fontSize: "25px"}}/>
                            <BiLogoFlask style={{color: "White", fontSize: "25px"}}/>
                            <SiFastapi style={{color: "Green", fontSize: "25px"}}/>
                        </div>

                    </div>

                    {/* Part of R */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <SiR style={{color: "#3c67f1"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">R-lang</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda R dasturlash tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                    </div>

                    {/* Part of JavaScript */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <SiJavascript style={{color: "Yellow"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">JavaScript</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda JavaScript dasturlash tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            <BiLogoNodejs style={{color: "#55FF00FF", fontSize: "25px"}}/>
                            <SiReact style={{color: "#00FFE1FF", fontSize: "25px"}}/>
                            <TbBrandNextjs style={{color: "Yellow", fontSize: "25px"}}/>
                            <BiLogoVuejs style={{color: "Green", fontSize: "25px"}}/>
                            <BiLogoAngular style={{color: "#FF3C00FF", fontSize: "25px"}}/>
                        </div>

                    </div>

                    {/* Part of TypeScript */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <SiTypescript style={{color: "#2e5bf3"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">TypeScript</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda TypeScript dasturlash tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            <BiLogoNodejs style={{color: "#55FF00FF", fontSize: "25px"}}/>
                            <SiReact style={{color: "#00FFE1FF", fontSize: "25px"}}/>
                            <TbBrandNextjs style={{color: "Yellow", fontSize: "25px"}}/>
                            <BiLogoVuejs style={{color: "Green", fontSize: "25px"}}/>
                            <BiLogoAngular style={{color: "#FF3C00FF", fontSize: "25px"}}/>
                        </div>

                    </div>

                </div>

            </div>

            {/* Front-end texnology typer */}
            <div className="skill-line">

                <div className="type-text">
                    <h2 className="text-t">Front-End Texnologies</h2>
                </div>

                <div className="softskill-texnologies">

                    {/* Part of HTML */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <SiHtml5 style={{color: "#FF002FFF"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">HTML</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda HTML markerlash tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            <BsFiletypeXml style={{color: "#687068FF", fontSize: "25px"}}/>
                            <SiJson style={{color: "#00FFE1FF", fontSize: "25px"}}/>
                            <BiText style={{color: "Yellow", fontSize: "25px"}}/>
                        </div>

                    </div>

                    {/* Part of CSS */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <SiCss3 style={{color: "#2e5bf3"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">CSS</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda CSS markerlash tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            <SiSass style={{color: "#C809F3FF", fontSize: "25px"}}/>
                            <SiBootstrap style={{color: "#00FFE1FF", fontSize: "25px"}}/>
                            <SiMui style={{color: "#043AE8FF", fontSize: "25px"}}/>
                        </div>

                    </div>

                </div>

            </div>

            {/* DataBase texnology typer */}
            <div className="skill-line">

                <div className="type-text">
                    <h2 className="text-t">DataBase Texnologies</h2>
                </div>

                <div className="softskill-texnologies">

                    {/* Part of MySQL */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <SiMysql style={{color: "#02ffc4"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">MySQL</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda MySQL tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            {/*FrameWorks*/}
                        </div>

                    </div>

                    {/* Part of MariaDB */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <SiMariadb style={{color: "#02d9ff"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">MariaDB</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda MariaDB tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            {/*FrameWorks*/}
                        </div>

                    </div>

                    {/* Part of PostgreSQL */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <SiPostgresql style={{color: "#1243E4FF"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">PostgreSQL</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda PostgreSQL tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            {/*FrameWorks*/}
                        </div>

                    </div>

                    {/* Part of MongoDB */}
                    <div className="softskill-lines">

                        {/* Text bosh qismi bilan ishlash */}
                        <div className="softlogo-tex">
                            <SiMongodb style={{color: "#248008FF"}} className="softlog-tex"/>
                            <h3 className="softmain-tex">MongoDB</h3>
                        </div>

                        <div className="softtext-tex">
                            Bu qismda MongoDB tili bo'yicha ma'lumotlarim yoziladi
                        </div>

                        <div className="frameworks">
                            {/*FrameWorks*/}
                        </div>

                    </div>


                </div>

            </div>


            {/* back button */}
            <div className="back-to-skill-page back-down">
                <a href="#" className="back-link" onClick={() => onPageChange("back-skill")}>
                    <BiArrowBack  className="Back-icon"/>
                    {/*<p className="back-text">Back</p>*/}
                </a>
            </div>

        </div>
    )
}

export default MySoftSkillFunc;