import React from 'react';

const MallCon = () => {
    return (
        <div id='mall-con'>
            <h1>CONTRIBUTION</h1>
            <div className='desc'>
                <div className='top'>
                    <div>
                        <h3>소스관리</h3>
                        <p>GitHub에서 팀원들과 브랜치를 통해 자료를 공유, 업데이트하며 전체 소스를 관리하였습니다.</p>
                    </div>
                    <div>
                        <h3>디자인 시스템</h3>
                        <p>쇼핑몰의 컨셉에 따른 색 조합을 구상해 디자인 시스템을 구축하였습니다.</p>
                    </div>
                    <div>
                        <h3>개인 상세페이지</h3>
                        <p>플라스틱을 재활용하여 만들어지는 플라스틱 꽃잎 키링의 상세설명 페이지를 디자인 하였습니다.</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div>
                        <h3>상세페이지 레이아웃</h3>
                        <p>홈 화면에서 제품을 클릭 후 이동되는 상세페이지의 공용 레이아웃을 디자인, 개발하였습니다.</p>
                    </div>
                    <div>
                        <h3>슬라이드 캐러셀</h3>
                        <p>제품의 이미지를 슬라이드로 볼 수 있도록 홈화면에 slick-carousel을 사용해 제작하였습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MallCon;