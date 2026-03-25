import React from 'react';

const MallInfo = () => {
    return (
        <div id='mall-info'>
            <h1>INFORMATION</h1>
            <div className='info-desc'>
                <div>
                    <h3>UI 디자인 방식</h3>
                    <p>Figma를 이용한 시스템 구축 후 코드 구현</p>
                </div>
                <div>
                    <h3>레이아웃 제작 방식</h3>
                    <p>Flex를 사용하여 카드 형태의 레이아웃을 구현</p>
                </div>
                <div>
                    <h3>플러그인</h3>
                    <p>React-Slick, Slick-Carousel, React Router</p>
                </div>
                <div>
                    <h3>제작기간</h3>
                    <p>2025년 7월 7일 ~ 7월 14일 (총 6일 소요)</p>
                </div>
                <div className='special'>
                    <h3>제작 참여율</h3>
                    <h4>70% (5인 팀 프로젝트)</h4>
                    <div>
                        <p>소스관리 (Git/GitHub로 소스 버전관리를 주도)</p>
                        <p>디자인 시스템 구축</p>
                        <p>메인페이지 슬라이드 캐러셀</p>
                        <p>전체 상세페이지 레이아웃을 구현</p>
                        <p>개인 상세페이지</p>
                    </div>
                </div>
                <div>
                    <h3>배포방식</h3>
                    <p>GitHub</p>
                </div>
                <div>
                    <h3>GitHub URL</h3>
                    <p>https://github.com/hyeswe10/pri-recyle</p>
                </div>
                <div>
                    <h3>Site URL</h3>
                    <p>https://hyeswe10.github.io/pri-recycle/</p>
                </div>
            </div>
        </div>
    );
};

export default MallInfo;