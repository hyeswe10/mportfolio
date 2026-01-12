import React from 'react';
import TopMenu from '../components/TopMenu';
import AboutMe from '../components/AboutMe';
import MainProjects from '../components/MainProjects';

const Mainpage = () => {
    return (
        <div id='main-page'>
            <TopMenu/>
            <AboutMe/>
            <MainProjects/>
        </div>
    );
};

export default Mainpage;