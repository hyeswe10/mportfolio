import React, { useRef } from 'react';
import TopMenu from '../components/TopMenu';
import AboutMe from '../components/AboutMe';
import MainProjects from '../components/MainProjects';
import CloneCoding from '../components/CloneCoding';
import PracticalPublishing from '../components/PracticalPublishing';

const Mainpage = () => {
    const aboutRef = useRef(null);
    const mainRef = useRef(null);
    const cloneRef = useRef(null);
    const practicalRef = useRef(null);
    const scrollTo = (ref)=>{
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <div id='main-page'>
            <TopMenu
                onAbout={()=>{scrollTo(aboutRef)}}
                onMain={()=>{scrollTo(mainRef)}}
                onClone={()=>{scrollTo(cloneRef)}}
                onPractical={()=>{scrollTo(practicalRef)}}
            />
            <div ref={aboutRef}><AboutMe/></div>
            <div ref={mainRef}><MainProjects/></div>
            <div ref={cloneRef}><CloneCoding/></div>
            <div ref={practicalRef}><PracticalPublishing/></div>
        </div>
    );
};

export default Mainpage;