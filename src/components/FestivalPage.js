import { useEffect, useState } from "react";
import FestCon from "./FestivalPage/FestCon";
import FestDesign from "./FestivalPage/FestDesign";
import FestInfo from "./FestivalPage/FestInfo";
import FestOverview from "./FestivalPage/FestOverview";
import FestRetro from "./FestivalPage/FestRetro";
import { IoCloseSharp } from "react-icons/io5";

const FestivalPage = ({isOpen, onClose}) => {
    const [ menu, setMenu ] = useState("info");
        const menuOptions = {
            info: <FestInfo/>,
            overview: <FestOverview/>,
            contribution: <FestCon/>,
            design: <FestDesign/>,
            retrospective: <FestRetro/>
        }
        useEffect(()=>{
            if(isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return()=>{
                document.body.style.overflow = '';
            }
        },[isOpen])
        useEffect(()=>{
            setMenu("info")
        },[])
        console.log(menu);
        if (!isOpen) return null;
    return (
        <div id="festival-page" onClick={()=>{onClose(false)}}>
            <div className="fest-wrap" onClick={(e)=>{e.stopPropagation()}}>
                <div className="close-icon" onClick={()=>{onClose(false)}}><IoCloseSharp/></div>
                <div className="fest-inner">
                    <div className="img"></div>
                    <div className="title-wrap">
                        <div className="top">
                            <h1>FESTIVAL<br/>PAGE</h1>
                            <p className="tools">React / React Router / Supabase / JSON /<br/>SCSS / Figma / 외부 API</p>
                        </div>
                        <div className="link-btn">
                            <button className="github" onClick={()=>{window.open("https://github.com/hyeswe10/ggfestival", "_blank")}}>GitHub Link</button>
                            <button className="website" onClick={()=>{window.open("https://hyeswe10.github.io/ggfestival/", "_blank")}}>WebSite Link</button>
                        </div>
                    </div>
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
    );
};

export default FestivalPage;