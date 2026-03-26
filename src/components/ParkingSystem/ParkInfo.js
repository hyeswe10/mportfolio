import React from 'react';

const ParkInfo = () => {
    return (
        <div id='park-info'>
            <h1>INFORMATION</h1>
            <div className='info-desc'>
                <div>
                    <h3>UI 디자인 방식</h3>
                    <p>Figma를 이용한 시스템 구축 후 코드 구현</p>
                </div>
                <div>
                    <h3>레이아웃 제작 방식</h3>
                    <p>Flex 레이아웃을 사용하여 콘텐츠와 버튼 사이에 적절한 간격을 주고,<br/>전체적인 여백을 고려해 모바일 환경에서도<br/>안정적인 화면 구성이 가능하도록 제작했습니다.</p>
                </div>
                <div>
                    <h3>플러그인</h3>
                    <p>React Router, React-Icons, Supabase</p>
                </div>
                <div>
                    <h3>제작기간</h3>
                    <p>2025년 7월 21일 ~ 8월 1일 (총 12일 소요)</p>
                </div>
                <div className='special'>
                    <h3>제작 참여율</h3>
                    <h4>80% (5인 팀 프로젝트)</h4>
                    <div>
                        <p>DB 테이블 설계 및 SQL 기반 데이터 관리</p>
                        <p>전체적인 API 코드 제작</p>
                        <p>예약 플로우차트 및 와이어프레임 기획</p>
                        <p>로그인/회원가입, 아이디/비밀번호, 예약하기 - 결제페이지 제작</p>
                    </div>
                </div>
                <div>
                    <h3>배포방식</h3>
                    <p>GitHub</p>
                </div>
                <div>
                    <h3>GitHub URL</h3>
                    <p>https://github.com/hyeswe10/dreamland</p>
                </div>
                <div>
                    <h3>Site URL</h3>
                    <p>https://hyeswe10.github.io/dreamland/</p>
                </div>
            </div>
        </div>
    );
};

export default ParkInfo;