import React from 'react';

const FestRetro = () => {
    return (
        <div id='fest-retro'>
            <h1>RETROSPECTIVE</h1>
            <div className='desc'>
                <div>
                    <h2>어려웠던 점</h2>
                    <p>각 외부 API마다 서로 다른 응답 구조와 사용 방식을 학습하는 데 시간이 소요되었으며, 필요한 데이터만을 선별하여 Supabase에 저장하는 과정에서 어려움을 겪었습니다.</p>
                </div>
                <div>
                    <h2>해결방법</h2>
                    <p>팀원 간 API담당을 분배하고 교차 검증 프로세스를 도입했으며, 상호 학습을 통해 각 API에 대한 이해도를 높여 개발 생산성을 향상시켰습니다.</p>
                </div>
                <div>
                    <h2>리팩토링 포인트</h2>
                    <p>더욱 세분화된 일정 관리와 정기적인 동기화 미팅을 통해 진행 상황을 모니터링한다면 개발 효율성을 더욱 높일 수 있습니다.</p>
                </div>
            </div>
        </div>
    );
};

export default FestRetro;