import React, { useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const Netflix = ({isOpen,onClose}) => {
    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return()=>{
            document.body.style.overflow = '';
        }
    },[isOpen])
    if(!isOpen) return null;
    return (
        <div id='netflix' onClick={()=>{onClose(false)}}>
            <div className='netflix-wrap' onClick={(e)=>{e.stopPropagation()}}>
                <div className='close-icon' onClick={()=>{onClose(false)}}><IoCloseSharp/></div>
                <img src='/images/netflix/net-bg.png' alt='넷플릭스 사진'/>
                <div className='title-wrap'>
                    <div className='top'>
                        <p>React / React Router / SCSS</p>
                        <h1>NETFLIX</h1>
                        <p className='url'>Original Site : https://www.netflix.com/kr/</p>
                    </div>
                    <div className='bot'>
                        <p>실제 서비스를 분석하고 디자인 구조와 기능 동작 방식을 유사하게 구현함으로써<br/>UI의 설계를 실무처럼 학습할 수 있도록 클론코딩을 진행하였습니다.</p>
                        <p></p>
                    </div>
                </div>
                <div className='first-img'></div>
                <p className='main-desc'>OPEN API를 이용하여 실시간 인기 영화를 불러올 수 있도록 설계하고,<br/> Slick-Carousel을 사용해 버튼을 누르면 다음 순위 4개가 보일 수 있게 구상하였습니다.</p>
                <div className='second-img'></div>
                <div className='info-wrap'>
                    <h2>INFORMATION</h2>
                    <div className='info-desc'>
                        <div className='left'>
                            <ul>
                                <h3>UI 디자인 방식</h3>
                                <li>오리지널 사이트를 참고하며 디자인 코드 구현</li>
                            </ul>
                            <ul>
                                <h3>레이아웃 제작 방식</h3>
                                <li>Flex를 기반으로 전체적인 레이아웃을 제작하고 Slick-Carousel을 사용하여 리스트 레이아웃 제작</li>
                            </ul>
                            <ul>
                                <h3>플러그인</h3>
                                <li>React-Icons, React-Slick, Slick-Carousel, Axios</li>
                            </ul>
                            <ul>
                                <h3>제작 기간</h3>
                                <li>2025년 6월 23일 ~ 6월 26일 (총 4일 소요)</li>
                            </ul>
                        </div>
                        <div className='right'>
                            <ul>
                                <h3>제작 참여율</h3>
                                <li>100% (개인 프로젝트)</li>
                            </ul>
                            <ul>
                                <h3>배포방식</h3>
                                <li>GitHub</li>
                            </ul>
                            <ul>
                                <h3>GITHUB URL</h3>
                                <li><a href='https://github.com/hyeswe10/netflix' target='_blank'>https://github.com/hyeswe10/netflix</a></li>
                            </ul>
                            <ul>
                                <h3>SITE URL</h3>
                                <li><a href='https://hyeswe10.github.io/netflix/' target='_blank'>https://hyeswe10.github.io/netflix/</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='learn'>
                    <h2>이 프로젝트에서 배운 점</h2>
                    <div className='learn-desc'>
                        <p>외부 <span>API 연결</span>을 통한 데이터 활용</p>
                        <p><span>Slick-Carousel</span> 사용법</p>
                        <p>컴포넌트 단위로 <span>나누어 적용</span>하는 방식</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Netflix;