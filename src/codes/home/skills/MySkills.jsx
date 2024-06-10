import React from "react";
import './MySkills.css'

import SoftSkillImage from './SoftSkills.jpg'
import HardSkillImage from './HardSkills.jpg'
import OtherSkillImage from './OtherSkillImage.jpg'

function MySkillPage({onPageChange}) {
    return (

        <div className="skill-container">

            <div className="skill-way">

                {/* Hard skill qismi */}
                <a href="#" className="skill-link" onClick={() => onPageChange("hards")}>

                    <div className="skill-image">
                        <img src={HardSkillImage} alt="" className="skill-image"/>
                    </div>

                    <p className="skill-text">

                        <h2 className="con-text">Hard Skills</h2>

                        <div className="mean-text">
                            Bu yerda mening shaxsiy skill dagree yoziladi va bu maning
                            shaxsiy tajribamni ifodalash uchun zarur.
                            Bu yerda mening shaxsiy skill dagree yoziladi va bu maning
                            shaxsiy tajribamni ifodalash uchun zarur.
                            Bu yerda mening shaxsiy skill dagree yoziladi va bu maning
                            shaxsiy tajribamni ifodalash uchun zarur.
                        </div>

                    </p>

                </a>

                {/*  Soft skill  */}
                <a href="#" className="skill-link" onClick={() => onPageChange("softs")}>
                    <div className="skill-image">
                        <img src={SoftSkillImage} alt="" className="skill-image"/>
                    </div>

                    <p className="skill-text">
                        <h2 className="con-text">Soft Skills</h2>

                        <div className="mean-text">
                            Bu yerda mening shaxsiy skill dagree yoziladi va bu maning
                            shaxsiy tajribamni ifodalash uchun zarur.
                            Bu yerda mening shaxsiy skill dagree yoziladi va bu maning
                            shaxsiy tajribamni ifodalash uchun zarur.
                            Bu yerda mening shaxsiy skill dagree yoziladi va bu maning
                            shaxsiy tajribamni ifodalash uchun zarur.
                        </div>
                    </p>
                </a>

                {/*  Other skill  */}
                <a href="#" className="skill-link" onClick={() => onPageChange("others")}>
                    <div className="skill-image">
                        <img src={OtherSkillImage} alt="" className="skill-image"/>
                    </div>

                    <p className="skill-text">
                        <h2 className="con-text">Other Skills</h2>

                        <div className="mean-text">
                            Bu yerda mening shaxsiy skill dagree yoziladi va bu maning
                            shaxsiy tajribamni ifodalash uchun zarur.
                            Bu yerda mening shaxsiy skill dagree yoziladi va bu maning
                            shaxsiy tajribamni ifodalash uchun zarur.
                            Bu yerda mening shaxsiy skill dagree yoziladi va bu maning
                            shaxsiy tajribamni ifodalash uchun zarur.
                        </div>
                    </p>
                </a>


            </div>

        </div>

    )
}

export default MySkillPage;