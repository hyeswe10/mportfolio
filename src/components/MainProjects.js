import React from 'react';
import { IoSparklesSharp } from "react-icons/io5";

const MainProjects = () => {
    const project1 = [
        {
            title: "BLOG WEBPAGE",
            tools: "HTML5 / CSS3 / SCSS",
            desc: "기업 소개용 블로그 웹사이트를 HTML/CSS 기획부터\n퍼블리싱까지 정적으로 구현한 프로젝트",
            pos: "top"
        },
        {
            title: "SHOPPING MALL",
            tools: "React / React Router / JSON / SCSS / Figma",
            desc: "JSON 데이터를 활용해 상품 리스트를 구성하고,\n사용자가 상품을 클릭하면\n상세 정보를 확인하고 장바구니에 담을 수 있는 React 쇼핑몰",
            pos: "top",
            button: true,
            badge: "1st COMPLETE"
        },
        {
            title: "FESTIVAL PAGE",
            tools: "React / React Router / Supabase / JSON / SCSS / Figma / 외부 API",
            desc: "경기도 내에서 진행하는 축제의 정보를\n각 지역 필터링 시스템으로 찾을 수 있도록\n외부 API를 사용하여 구현한 앱",
            pos: "top",
            button: true,
            badge: "3rd COMPLETE"
        }
    ]
    const project2 = [
        {
            title: "QUIZ GAME",
            tools: "React / Mobile-First UI",
            desc: "상태 관리를 통해 정답 체크 및 점수합산이 가능한\nReact 기반의 모바일 게임 웹앱",
            pos: "bottom"
        },
        {
            title: "PARKING SYSTEM",
            tools: "React / React Router / Supabase / JSON / SCSS / Figma",
            desc: "차량 주차를 사전에 예약할 수 있는 시스템으로\nSupabase + React를 사용하여 구현한 웹앱",
            pos: "bottom",
            button: true,
            badge: "2nd COMPLETE"
        }
    ]
    return (
        <div id='main-projects'>
            <div className='title'>
                <h1>MAIN PROJECTS</h1>
                <p className='main-desc'>단순한 HTML/CSS 기반의 정적 웹페이지에서 시작해 JS, React를 활용한<br/>사용자 중심의 인터렉션 기능까지 점차 확장시켜 프로젝트를 발전시켰습니다.<br/>실무 역량 강화를 목표로, 기획부터 UI설계, 퍼블리싱,<br/>프론트엔드 개발까지 전 과정에 직접 참여하여 제작한 웹 프로젝트입니다.</p>
            </div>
            <div className='timeline-container'>
                <div className='project1-wrap'>
                    {
                        project1.map((item,idx)=>{
                            return <div key={idx} className={`project1-item ${idx === 0 ? 'blog' : ''}`}>
                                <div className='project-content'>
                                    {item.badge && 
                                        <span className='badge'>
                                            <IoSparklesSharp />
                                            {item.badge}
                                        </span>
                                    }
                                    <span className='tools'>{item.tools}</span>
                                    <h3>{item.title}</h3>
                                    <p className='desc'>{item.desc}</p>
                                    {item.button &&
                                        <button className='button'>이동하기</button>
                                    }
                                </div>
                                <div className='timeline-dot'></div>
                            </div>
                        })
                    }
                </div>
                <div className='timeline-line'></div>
                <div className='project2-wrap'>
                    {
                        project2.map((item,idx)=>{
                            return <div key={idx} className={`project2-item ${idx === 0 ? 'quiz' : ''}`}>
                                <div className='timeline-dot'></div>
                                <div className='project-content'>
                                    {item.badge && 
                                        <span className='badge'>
                                            <IoSparklesSharp />
                                            {item.badge}
                                        </span>
                                    }
                                    <span className='tools'>{item.tools}</span>
                                    <h3>{item.title}</h3>
                                    <p className='desc'>{item.desc}</p>
                                    {item.button &&
                                        <button className='button'>이동하기</button>
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default MainProjects;