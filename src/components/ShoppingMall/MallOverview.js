import React from 'react';

const MallOverview = () => {
    return (
        <div id='mall-overview'>
            <h1>OVERVIEW</h1>
            <div className='desc'>
                <ul>
                    <h2>프로젝트 목표</h2>
                    <li>상품의 데이터를 JSON으로 구성하고 React의 컴포넌트 구조를 활용해 단순한 화면의 이동이 아닌 데이터가 같이 이동되어 사용자가 실제로 경험하게 될 쇼핑몰의 흐름을 구현하고자 하였습니다.</li>
                </ul>
                <ul>
                    <h2>맡은 역할</h2>
                    <li>GitHub 레파지토리를 생성해 브랜치로 관리하며 팀 개발의 구조를 정리</li>
                    <li>메인페이지 및 상세페이지 컴포넌트 구현</li>
                </ul>
                <ul>
                    <h2>맡은 기능</h2>
                    <li>메인페이지의 슬라이더 자동으로 2.5초에 한번씩 넘어가거나 이전버튼, 다음버튼 클릭 시에도 이동이 되도록 구현</li>
                    <li>상세페이지에서 useState를 활용하여 수량체크, 장바구니 추가 기능을 설계</li>
                    <li>여러 상품 중 어떤 걸 클릭해도 그에 맞는 정보가 보여지도록 데이터 연동을 처리</li>
                </ul>
            </div>
        </div>
    );
};

export default MallOverview;