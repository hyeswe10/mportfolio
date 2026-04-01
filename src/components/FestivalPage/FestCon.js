import React from 'react';

const FestCon = () => {
    return (
        <div id='fest-con'>
            <h1>CONTRIBUTION</h1>
            <div className='desc'>
                <div className='top'>
                    <div className='db'>
                        <h3>DB관리</h3>
                        <p>Supabase를 활용해 사용자 정보, 축제 정보등을 저장할 수 있도록 테이블을 설계하였습니다.</p>
                    </div>
                    <div className='page'>
                        <h3>페이지 제작</h3>
                        <div className='spec-desc'>
                            <p>로그인/회원가입 페이지에서 Supabase 데이터가 추출, 삽입이 원활히 되도록 설계하였습니다.</p>
                            <p>검색 인터페이스를 통한 키워드 기반 필터링 시스템과 랜덤 추천 알고리즘을 구현하여 다가적인 축제 탐색 경험을 제공할 수 있도록 제작하였습니다.</p>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='flow'>
                        <h3>와이어프레임&플로우차트</h3>
                        <p>로그인/회원가입 기능의 사용자 흐름을 정리하였고, 이를 기반으로 와이어프레임과 UI 디자인을 구성하여 사용자가 쉽게 예약 절차를 진행할 수 있도록 설계하였습니다.</p>
                    </div>
                    <div className='api'>
                        <h3>외부 API 연결 및 저장</h3>
                        <p>외부 API 연동 데이터를 Supabase에 저장하는 파이프라인을 구축했으며, 회원가입 및 로그인 플로우를 SQL 기반으로 설계하였습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FestCon;