import React from 'react';

const ParkCon = () => {
    return (
        <div id='park-con'>
            <h1>CONTRIBUTION</h1>
            <div className='desc'>
                <div className='top'>
                    <div className='db'>
                        <h3>DB관리</h3>
                        <p>Supabase를 활용해 사용자 정보, 예약 내역등을 저장할 수 있도록 테이블을 설계하였습니다.</p>
                    </div>
                    <div className='page'>
                        <h3>페이지 제작</h3>
                        <p>예약하기의 마지막이 되는 결제 페이지 부분의 개발을 맡아서 구성하였습니다.</p>
                        <p>로그인/회원가입 페이지에서 Supabase 데이터가 추출, 삽입이 원활히 되도록 설계하였습니다.</p>
                        <p>아이디/비밀번호 찾기 페이지의 데이터와 디자인, 개발을 진행하였습니다.</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div>
                        <h3>와이어프레임&플로우차트</h3>
                        <p>예약하기 기능의 사용자 흐름을 정리하였고, 이를 기반으로 와이어프레임과 UI 디자인을 구성하여 사용자가 쉽게 예약 절차를 진행할 수 있도록 설계하였습니다.</p>
                    </div>
                    <div>
                        <h3>API 코드제작</h3>
                        <p>인증과 예약 기능에 필요한 데이터베이스 구조를 직접 구축하였습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParkCon;