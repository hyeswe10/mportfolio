import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import MallInfo from "./ShoppingMall/MallInfo";
import MallOverview from "./ShoppingMall/MallOverview";
import MallCon from "./ShoppingMall/MallCon";
import MallDesign from "./ShoppingMall/MallDesign";
import MallRetro from "./ShoppingMall/MallRetro";

const ShoppingMall = ({isOpen,onClose}) => {
    const [ menu, setMenu ] = useState("info");
    const menuOptions = {
        info: <MallInfo/>,
        overview: <MallOverview/>,
        contribution: <MallCon/>,
        design: <MallDesign/>,
        retrospective: <MallRetro/>
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
        <div id="shopping-mall" onClick={()=>{onClose(false)}}>
            <div className="mall-wrap" onClick={(e)=>{e.stopPropagation()}}>
                <div className="close-icon" onClick={()=>{onClose(false)}}><IoCloseSharp /></div>
                <div className="mall-inner">
                    <div className="img"></div>
                    <div className="title-wrap">
                        <div className="top">
                            <h1>CONCEPTED<br/>SHOPPING MALL</h1>
                            <div className="link-btn">
                                <button className="github" onClick={()=>{window.open("https://github.com/hyeswe10/recycle", "_blank")}}>GitHub LINK</button>
                                <button className="website" onClick={()=>{window.open("https://hyeswe10.github.io/recycle/","_blank")}}>WebSite LINK</button>
                            </div>
                        </div>
                        <p className="tools">PhotoShop / Figma / React / GSAP / Git / GitHub / SCSS / JSON</p>
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

export default ShoppingMall;