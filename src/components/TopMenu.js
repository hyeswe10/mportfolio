import React from 'react';
import { TiHomeOutline } from "react-icons/ti";

const TopMenu = ({ onAbout, onMain, onClone, onPractical }) => {
    return (
        <div id="top-menu">
            <div className="home-btn"><TiHomeOutline /></div>
            <div className="menu-list">
                <a onClick={onAbout} data-text="ABOUT ME">ABOUT ME</a>
                <a onClick={onMain} data-text="MAIN PROJECTS">MAIN PROJECTS</a>
                <a onClick={onClone} data-text="CLONE CODING">CLONE CODING</a>
                <a onClick={onPractical} data-text="PRACTICAL">PRACTICAL</a>
            </div>
        </div>
    );
};

export default TopMenu;