import React from 'react';

const MallRetro = () => {
    return (
        <div id='mall-retro'>
            <h1>RETROSPECTIVE</h1>
            <div className='desc'>
                <ul>
                    <h2>어려웠던 점</h2>
                    <li>처음하는 팀 프로젝트에 파트별로 나누어 작업하는 것이 익숙치 않아서 소통의 부재를 많이 느꼈다.</li>
                </ul>
                <ul>
                    <h2>해결방법</h2>
                    <li>업무 진행 상황과 개발 방향을 일치시키기 위해 파트 간 연결되는 기능의 정의를 명확히 하여 초반보다 소통을 활발히하여 마지막에서는 조화롭게 끝마칠 수 있었다.</li>
                </ul>
                <ul>
                    <h2>리팩토링 포인트</h2>
                    <li>파트 분배를 무적정하는 것이 아닌 비슷하게 연결되는 파트끼리 묶어서 나눈 방법으로 서로 파트간의 의존도를 낮추며 충돌을 낮추는 방향으로 개선할 수 있을 것으로 보인다.</li>
                </ul>
            </div>
        </div>
    );
};

export default MallRetro;