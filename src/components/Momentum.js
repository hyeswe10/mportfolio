import React, { useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const Momentum = ({isOpen,onClose}) => {
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
        <div id='momentum' onClick={()=>{onClose(false)}}>
            <div className='mom-wrap' onClick={(e)=>{e.stopPropagation()}}>
                <div className='close-icon' onClick={()=>{onClose(false)}}><IoCloseSharp/></div>
                <div className='img'></div>
                <div className='title-wrap'>
                    <p>React / JavaScript / SCSS</p>
                    <h1>MOMENTUM</h1>
                    <p className='url'>Original Site : https://momentumdash.com/</p>
                </div>
                <div className='first-desc'>
                    <p>기존 사이트의 구조를 그대로 따라가기보다, <br/>사용자 취향에 따라 다양한 테마를 적용하도록 설계하였습니다.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>우측 중앙에 위치한 테마 선택 시 해당 테마로 변경되도록 구현하였습니다.</p>
                </div>
                <div className='theme-wrap'>
                    <h2>THEME</h2>
                    <div className='theme-img'>
                        <div className='blue'>
                            <h3>BLUE</h3>
                            <div className='blue-img'></div>
                        </div>
                        <div className='pink'>
                            <h3>PINK</h3>
                            <div className='pink-img'></div>
                        </div>
                        <div className='red'>
                            <h3>RED</h3>
                            <div className='red-img'></div>
                        </div>
                    </div>
                </div>
                <div className='info-wrap'>
                    <h2>INFORMATION</h2>
                    <div className='info-desc'>
                        <div className='left'>
                            <ul>
                                <h3>UI 디자인 방식</h3>
                                <li>오리지널 사이트에서 메인적인 기능을 가져와 직접 테마, 디자인을 구축하고 코드 구현</li>
                            </ul>
                            <ul>
                                <h3>레이아웃 제작 방식</h3>
                                <li>Flex를 기반으로 전체적으로 가운데 위치하도록 레이아웃 제작</li>
                            </ul>
                            <ul>
                                <h3>제작 기간</h3>
                                <li>2025년 6월 17일 ~ 6월 19일 (총 3일 소요)</li>
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
                                <li><a href='https://github.com/hyeswe10/myday' target='_blank'>https://github.com/hyeswe10/myday</a></li>
                            </ul>
                            <ul>
                                <h3>SITE URL</h3>
                                <li><a href='https://hyeswe10.github.io/myday/' target='_blank'>https://hyeswe10.github.io/myday/</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='learn'>
                    <h2>이 프로젝트에서 배운점</h2>
                    <div className='learn-desc'>
                        <p><span>날씨 API</span>와 <span>현재 시간</span>을 적용하는 방법</p>
                        <p><span>localStorage</span> 사용법</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Momentum;