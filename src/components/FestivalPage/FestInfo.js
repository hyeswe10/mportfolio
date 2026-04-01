import React from 'react';

const FestInfo = () => {
    return (
        <div id='fest-info'>
            <h1>INFORMATION</h1>
            <div className='info-desc'>
                <div>
                    <h3>UI 디자인 방식</h3>
                    <p>Figma를 이용한 시스템 구축 후 코드 구현</p>
                </div>
                <div>
                    <h3>레이아웃 제작 방식</h3>
                    <p>Grid Layout을 활용해 모바일에 최적화된 UI를 설계했으며,<br/>스와이프 시 유연하고 안정적인<br/>사용자 경험을 제공하도록 제작했습니다.</p>
                </div>
                <div>
                    <h3>플러그인</h3>
                    <p>React Router, React-Icons,<br/>Supabase, 외부 API</p>
                </div>
                <div className='special'>
                    <h3>제작 참여율</h3>
                    <h4>70% (5인 팀 프로젝트)</h4>
                    <div>
                        <p>전체적인 API 코드 제작</p>
                        <p>외부 API와 연결 및 정보테이블 관리</p>
                        <p>와이어프레임 기획</p>
                        <p>로그인/회원가입, 검색창 제작</p>
                    </div>
                </div>
                <div>
                    <h3>배포방식</h3>
                    <p>GitHub</p>
                </div>
                <div>
                    <h3>GitHub URL</h3>
                    <p>https://github.com/hyeswe10/ggfestival</p>
                </div>
                <div>
                    <h3>Site URL</h3>
                    <p>https://hyeswe10.github.io/ggfestival/</p>
                </div>
            </div>
        </div>
    );
};

export default FestInfo;