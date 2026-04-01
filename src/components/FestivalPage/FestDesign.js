import React from 'react';

const FestDesign = () => {
    const colors = [
        { code: "#37B7C4", name: "PRIMARY"},
        { code: "#2C94A0", name: "PRI-DARK"},
        { code: "#55D4DF", name: "PRI-LIGHT"},
        { code: "#A7D28B", name: "SECONDARY"},
        { code: "#82B568", name: "SEC-DARK"},
        { code: "#BFE0A8", name: "SEC-LIGHT"},
        { code: "#333333", name: "FONT-COLOR"},
        { code: "#999999", name: "GRAY"},
        { code: "#D1D5DB", name: "LIGHT-GRAY"}
    ]
    return (
        <div id='fest-design'>
            <h1 className='main-h1'>DESIGN SYSTEM</h1>
            <div className='desc'>
                <div className='logo'>
                    <h3>LOGO</h3>
                    <div className='logo-wrap'>
                        <div className='logo-img'></div>
                    </div>
                </div>
                <div className='color'>
                    <h3>COLOR</h3>
                    <div className='color-grid'>
                        {colors.map((value,idx)=>{
                            return(
                                <div key={idx} className={value.name}>
                                    <span>{value.name}</span>
                                    <span>{value.code}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='font'>
                    <h3 className='main-h3'>FONT</h3>
                    <div className='font-wrap'>
                        <div className='top'>
                            <p className='font-title'>Heading (타이틀)</p>
                            <h1>H1 / 32px / Bold 700 / line-height: 40px/ 랜딩 타이틀</h1>
                            <h2>H2 / 28px / Bold 700 / line-height: 36px / 페이지 타이틀</h2>
                            <h3>H3 / 22px / SemiBold 600 / line-height: 28px / 섹션 타이틀</h3>
                            <h4>H4 / 18px / SemiBold 600 / line-height: 24px / 카드 타이틀</h4>
                        </div>
                        <div className='mid'>
                            <p className='font-title'>Body (본문)</p>
                            <p className='b-l'>Body-L / 16px / SemiBold 600 / line-height: 24px / 본문 큰 글씨</p>
                            <p className='b-m'>Body-M / 14px / Medium 500 / line-height: 21px / 본문 기본</p>
                            <p className='b-s'>Body-S / 12px / Regular 400 / line-height: 18px / 보조 텍스트, 설명</p>
                        </div>
                        <div className='bottom'>
                            <p className='font-title'>Caption & Label</p>
                            <p className='cap'>Caption / 10px / Medium 400 / line-height: 15px / 레이블 태그</p>
                            <p className='label'>Overline / 9px / Medium 400 / line-height: 12px / 버튼 상단 라벨, 카테고리</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FestDesign;