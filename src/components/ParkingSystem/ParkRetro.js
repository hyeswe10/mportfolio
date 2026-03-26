import React from 'react';

const ParkRetro = () => {
    return (
        <div id='park-retro'>
            <h1>RETROSPECTIVE</h1>
            <div className='desc'>
                <div>
                    <h2>어려웠던 점</h2>
                    <p>팀원들과 아이디어가 많았던 만큼, 구현할 기능도 많아졌고, 예상보다 시간이 부족해지는 어려움이 있었습니다.</p>
                </div>
                <div>
                    <h2>해결방법</h2>
                    <p>중간점검을 통해 꼭 필요한 기능을 중심으로 우선순위를 재조정하고, 역할을 분담해 효율적으로 완성도를 높였습니다.</p>
                </div>
                <div>
                    <h2>리팩토링 포인트</h2>
                    <p>작업 초기부터 일정표를 작성하여 각 단계별 목표를 시각화함으로써 시간 관리를 강화 할 수 있습니다.</p>
                </div>
            </div>
        </div>
    );
};

export default ParkRetro;