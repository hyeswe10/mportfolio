import React from 'react';

const FestOverview = () => {
    return (
        <div id='fest-overview'>
            <h1>OVERVIEW</h1>
            <div className='desc'>
                <ul>
                    <h2>프로젝트 목표</h2>
                    <li>React와 Supabase를 연동하여 실제 데이터베이스를 구축해 정보를 저장하도록 설계</li>
                    <li>외부 API 연동을 통해 축제 데이터를 수집하고 Supabase 기반의 데이터 관리 시스템을 구축</li>
                    <li>지역축제에 대한 상세 정보를 제공하여 사용자의 축제 탐색 경험을 제공</li>
                </ul>
                <ul>
                    <h2>맡은 역할</h2>
                    <h3>▶데이터팀 팀장 담당◀</h3>
                    <li>Supabase를 사용하여 외부 API에서 가져온 정보를 저장 및 관리</li>
                    <li>프론트와의 데이터 연동을 위한 구조를 설계하고, API 응답 형식에 맞춰 데이터를 구축</li>
                </ul>
                <ul>
                    <h2>맡은 기능</h2>
                    <li>로그인/회원가입 기능을 구현하여 사용자의 정보가 Supabase에 저장되고 호출이 될 수 있도록 개발</li>
                    <li>검색창에서 검색어 입력 및 키워드 클릭 시 해당 페이지로 이동되도록 설계</li>
                    <li>외부 API와 Supabase를 연동한 데이터 동기화 시스템을 설계하여 축제 정보의 지속적인 업데이트 체계를 확립</li>
                </ul>
            </div>
        </div>
    );
};

export default FestOverview;