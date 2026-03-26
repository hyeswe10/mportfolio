import React from 'react';

const ParkDesign = () => {
    const colors = [
        { code: "#BD6CE3", name: "PRIMARY"},
        { code: "#DCD5E8", name: "SUB-COLOR"},
        { code: "#FFF098", name: "SECONDARY"},
        { code: "#2B2D42", name: "FONT-COLOR"},
        { code: "#BAB6C3", name: "GRAY"},
        { code: "#EFEFEF", name: "LIGHT-GRAY"}
        
    ]
    return (
        <div id='park-design'>
            <h1 className='main-h1'>DESIGN SYSTEM</h1>
            <div className='desc'>
                <div className='color'>
                    <h3 className='main-h3'>COLOR</h3>
                    <div className='color-grid'>
                        {colors.map((value,idx)=>{
                            return (
                                <div key={idx} className={value.name}>
                                    <span>{value.name}</span>
                                    <span>{value.code}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='right'>
                    <div className='logo'>
                        <h3 className='main-h3'>LOGO</h3>
                        <div className='logo-wrap'>
                            <div className='logo-img'></div>
                        </div>
                    </div>
                    <div className='font'>
                        <h3 className='main-h3'>FONT</h3>
                        <div className='font-wrap'>
                            <h1 className='desc-h1'>H1 (페이지 제목): Pretendard / 32px / Bold</h1>
                            <h2>H2 (섹션 제목): Pretendard / 24px / Semi-bold</h2>
                            <h3 className='desc-h3'>H3 (카드 제목): Pretendard / 20px / Semi-bold</h3>
                            <p className='body-r'>Body (본문): Pretendard / 16px /Regular</p>
                            <p className='body-b'>Body-bold (본문): Pretendard / 16px / Semi-bold</p>
                            <p className='cap'>Caption (보조텍스트): Pretendard / 14px / Regular</p>
                            <p className='over'>Overline (작은 메뉴): Pretendard / 10px / Regular</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='main-h1 response'>RESPONSIVE DESIGN</h1>
            <div className='res-wrap'>
                <div className='phone'></div>
                <div className='desktop'></div>
            </div>
        </div>
    );
};

export default ParkDesign;