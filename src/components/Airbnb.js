import React, { useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const Airbnb = ({isOpen,onClose}) => {
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
        <div id='airbnb' onClick={()=>{onClose(false)}}>
            <div className='air-wrap' onClick={(e)=>{e.stopPropagation()}}>
                <div className='close-icon' onClick={()=>{onClose(false)}}><IoCloseSharp/></div>
                <div className='title-wrap'>
                    <div className='top'>
                        <p>HTML5 / CSS3 / SCSS</p>
                        <h1>AIRBNB</h1>
                        <p className='url'>Original Site : https://www.airbnb.co.kr/</p>
                    </div>
                    <div className='title-img'></div>
                    <p className='title-desc'>반응형 레이아웃 구현 능력을 키우기 위해 Grid 시스템과<br/>미디어 쿼리를 중심으로 화면을 설계하였습니다.</p>
                </div>
                <div className='res-design'>
                    <h2>RESPONSIVE DESIGN</h2>
                    <div className='res-desc'>
                        <div className='pc-tablet'>
                            <h3>PC / TABLET</h3>
                            <div className='pc-img'></div>
                        </div>
                        <div className='mobile'>
                            <h3>MOBILE</h3>
                            <div className='mobile-img'></div>
                        </div>
                    </div>
                </div>
                <div className='info-wrap'>
                    <h2>INFORMATION</h2>
                    <div className='info-desc'>
                        <div className='left'>
                            <ul>
                                <h3>UI 디자인 방식</h3>
                                <li>오리지널 사이트를 보면서 위치적인 디자인을 따라하며 코드 구현</li>
                            </ul>
                            <ul>
                                <h3>레이아웃 제작 방식</h3>
                                <li>Grid 기반으로 카드형식의 페이지 레이아웃 제작</li>
                            </ul>
                            <ul>
                                <h3>제작 기간</h3>
                                <li>2025년 4월 29일 ~ 4월 30일 (총 2일 소요)</li>
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
                                <li><a href='https://github.com/hyeswe10/hyeswe10.github.io/tree/main/airbnb' target='_blank' rel='noreferrer'>https://github.com/hyeswe10/hyeswe10.<br/>github.io/tree/main/airbnb</a></li>
                            </ul>
                            <ul>
                                <h3>SITE URL</h3>
                                <li><a href='https://hyeswe10.github.io/airbnb/index.html' target='_blank' rel='noreferrer'>https://hyeswe10.github.io/airbnb/index.html</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='learn'>
                    <h2>이 프로젝트에서 배운 점</h2>
                    <div className='learn-desc'>
                        <p><span>Grid Layout</span> 사용법</p>
                        <p><span>반응형 페이지</span> 제작</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Airbnb;