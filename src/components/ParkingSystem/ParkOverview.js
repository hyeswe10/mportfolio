import React from 'react';

const ParkOverview = () => {
    return (
        <div id='park-overview'>
            <h1>OVERVIEW</h1>
            <div className='desc'>
                <div>
                    <h2>프로젝트 목표</h2>
                    <p>React와 Supabase를 연동하여 실제 데이터베이스를 구축해 정보를 저장하도록 설계</p>
                    <p>사용자의 편의를 위한 예약 시스템으로 컴포넌트의 재사용성과 유지보수를 고려한 구조로 기획</p>
                </div>
                <div>
                    <h2>맡은 역할</h2>
                    <h3>▶데이터관리 담당◀</h3>
                    <p>Supabase를 사용하여 테이블을 생성하고 SQL 기반의 데이터 관리</p>
                    <p>프론트와 데이터 연동을 위한 구조를 설계하고, API 응답 형식에 맞춰 데이터를 구축</p>
                </div>
                <div>
                    <h2>맡은 기능</h2>
                    <p>로그인/회원가입 기능을 구현하여 사용자의 정보가 Supabase에 저장되고 호출이 될 수 있도록 개발</p>
                    <p>아이디/비밀번호 찾기 기능으로 사용자가 정보를 찾고자 할 때 호출 또는 재설정을 할 수 있게 설계</p>
                    <p>예약 기능을 통해 React와 useState를 활용하여 Supabase에 사용자 예약정보를 저장하는 기능을 구현</p>
                </div>
            </div>
        </div>
    );
};

export default ParkOverview;