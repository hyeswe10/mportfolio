
const ShoppingMall = ({isOpen,onClose}) => {
    if (!isOpen) return null;
    return (
        <div id="shopping-mall">
            <div className="mall-wrap">
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
                <div className="menu"></div>
                <div className="info"></div>
                <div className="overview"></div>
                <div className="contri"></div>
                <div className="design"></div>
                <div className="res-design"></div>
                <div className="retro"></div>
            </div>
        </div>
    );
};

export default ShoppingMall;