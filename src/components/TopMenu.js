import React from 'react';
import { TiHomeOutline } from "react-icons/ti";

const TopMenu = () => {
    return (
        <div id="top-menu">
            <div className="home-btn"><TiHomeOutline /></div>
            <div className="menu-list">
                <a data-text="ABOUT ME">ABOUT ME</a>
                <a data-text="MAIN PROJECTS">MAIN PROJECTS</a>
                <a data-text="CLONE CODING">CLONE CODING</a>
                <a data-text="PRACTICAL">PRACTICAL</a>
            </div>
        </div>
    );
};

export default TopMenu;