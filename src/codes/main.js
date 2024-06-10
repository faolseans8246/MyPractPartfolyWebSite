
import React, {useState} from "react";
import './main.css'

import HomeIndex from '../codes/home/Home';
import HeaderIndex from '../codes/header/Header';
import FooterIndex from './footer/Footer';
import MySkills         from "./home/skills/MySkills";
import MyHardSkillIndex from './home/skills/allSkills/MyHardSkillPage'
import MySoftSkillPage  from "./home/skills/allSkills/MySoftSkillPage";
import MyOtherSkillPage from "./home/skills/allSkills/MyOtherSkillPage";
import MyPartfolyPage from './home/partfoly/MePartfoly';
import MyGalleryPage from './home/gallery/MyGallery';
import MyServicePage from './home/service/MyService';
import MyNewsPage from './home/news/MyNews';
import MyContactPage from './home/contacts/MyContacts';
import MySupportPage from './home/support/MySupport';
import MyAboutPage from './home/about/MyAbout';

const mainFunc = () => {

    // Task variables
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState("home")

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (

        <div className="main-container">

            <HeaderIndex onPageChange={handlePageChange} />

            {currentPage === "home" && <HomeIndex />}
            {currentPage === "skills" && <MySkills onPageChange={handlePageChange}/>}
            {currentPage === "back-skill" && <MySkills onPageChange={handlePageChange}/>}
            {currentPage === "partfoly" && <MyPartfolyPage onPageChange={handlePageChange} />}
            {currentPage === "gallery" && <MyGalleryPage onPageChange={handlePageChange}/>}
            {currentPage === "services" && <MyServicePage onPageChange={handlePageChange} />}
            {currentPage === "news" && <MyNewsPage onPageChange={handlePageChange} />}
            {currentPage === "contacts" && <MyContactPage onPageChange={handlePageChange} />}
            {currentPage === "support" && <MySupportPage onPageChange={handlePageChange} />}
            {currentPage === "about" && <MyAboutPage onPageChange={handlePageChange} />}

            {currentPage === "hards" && <MyHardSkillIndex onPageChange={handlePageChange}/>}
            {currentPage === "softs" && <MySoftSkillPage onPageChange={handlePageChange}/>}
            {currentPage === "others" && <MyOtherSkillPage onPageChange={handlePageChange}/>}


            <FooterIndex />

        </div>

    )

}

export default mainFunc;