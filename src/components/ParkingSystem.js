import { useEffect, useState } from "react";
import ParkCon from "./ParkingSystem/ParkCon";
import ParkDesign from "./ParkingSystem/ParkDesign";
import ParkInfo from "./ParkingSystem/ParkInfo";
import ParkOverview from "./ParkingSystem/ParkOverview";
import ParkRetro from "./ParkingSystem/ParkRetro";
import { IoCloseSharp } from "react-icons/io5";

const ParkingSystem = ({isOpen,onClose}) => {
    const [ menu, setMenu ] = useState("info");
    const menuOptions = {
        info: <ParkInfo/>,
        overview: <ParkOverview/>,
        contribution: <ParkCon/>,
        design: <ParkDesign/>,
        retrospective: <ParkRetro/>
    }
    useEffect(()=>{
        if(isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    },[isOpen])
    useEffect(()=>{
        setMenu("info")
    },[])
    console.log(menu);
    if (!isOpen) return null;
    return (
        <div id="parking-system" onClick={()=>{onClose(false)}}>
            <div className="park-wrap" onClick={(e)=>{e.stopPropagation()}}>
                <div className="close-icon" onClick={()=>{onClose(false)}}><IoCloseSharp /></div>
                <div className="park-inner">
                    <div className="img"></div>
                    <div className="title-wrap">
                        <div className="top">
                            <h1>PARKING<br/>SYSTEM</h1>
                            <div className="link-btn">
                                <button className="github" onClick={()=>{window.open("https://github.com/hyeswe10/dreamland","_blank")}}>GitHub LINK</button>
                                <button className="website" onClick={()=>{window.open("https://hyeswe10.github.io/dreamland/")}}>WebSite LINK</button>
                            </div>
                        </div>
                        <p className="tools">React / Supabase / JSON / SCSS / Figma</p>
                    </div>
                    <div className="menu">
                        <button className={menu === "info" ? "checked" : ''} data-text="INFO" onClick={()=>{setMenu("info")}}>INFO</button>
                        <button className={menu === "overview" ? "checked" : ''} data-text="OVERVIEW" onClick={()=>{setMenu("overview")}}>OVERVIEW</button>
                        <button className={menu === "contribution" ? "checked" : ''} data-text="CONTRIBUTION" onClick={()=>{setMenu("contribution")}}>CONTRIBUTION</button>
                        <button className={menu === "design" ? "checked" : ''} data-text="DESIGN" onClick={()=>{setMenu("design")}}>DESIGN</button>
                        <button className={menu === "retrospective" ? "checked" : ''} data-text="RETROSPECTIVE" onClick={()=>{setMenu("retrospective")}}>RETROSPECTIVE</button>
                    </div>
                    <div>
                        {menuOptions[menu] ?? null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParkingSystem;