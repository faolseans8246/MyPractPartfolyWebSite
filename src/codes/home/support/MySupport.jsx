
import React from "react";
import './MySupport.css'

function MySupportFunc() {
    return (
        <div className="support-containers">

            <div className="enter-person-notes">

                {/* odam ma'lumotini kiritish */}
                <div className="person-notes">

                    <form action="" className="person-notes-foem">

                        {/* Lastname part */}
                        <div className="person-lastname">
                            <label htmlFor="" className="person-lastname-label">
                                Lastname:
                            </label>

                            <input type="text" placeholder="Enter lastname..." className="person-lastname-input"/>
                        </div>

                        {/* Firstname part */}
                        <div className="person-firstname">
                            <label htmlFor="" className="person-firstname-label">
                                Firstname:
                            </label>

                            <input type="text" placeholder="Enter firstname..." className="person-lastname-input"/>
                        </div>

                        {/* description part */}
                        <div className="person-description">
                            <label htmlFor="" className="person-description-label">
                                Description:
                            </label>

                            <textarea placeholder="Enter description..." className="person-description-area"/>
                        </div>

                    </form>

                </div>

                {/* karta ma'lumotlarini kiriting */}
                <div className="card-notes">

                    <form action="" className="enter-card-form">

                        card notes form

                    </form>

                </div>

            </div>

        </div>
    )
}

export default MySupportFunc;