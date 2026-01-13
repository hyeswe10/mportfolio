import React from 'react';
import TopMenu from '../components/TopMenu';
import AboutMe from '../components/AboutMe';
import MainProjects from '../components/MainProjects';
import CloneCoding from '../components/CloneCoding';

const Mainpage = () => {
    return (
        <div id='main-page'>
            <TopMenu/>
            <AboutMe/>
            <MainProjects/>
            <CloneCoding/>
        </div>
    );
};

export default Mainpage;