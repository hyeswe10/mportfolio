import React, { useState } from 'react';
import Netflix from './Netflix';
import Momentum from './Momentum';
import Airbnb from './Airbnb';

const CloneCoding = () => {
    const [netOpen, setNetOpen] = useState(false);
    const [momOpen, setMomOpen] = useState(false);
    const [airOpen, setAirOpen] = useState(false);
    const projects = [
        {
            title: "NETFLIX",
            desc: "최대한 디자인적인 부분과 기능적인 부분에서 유사함을 느낄 수 있게끔 하는 것에\n중점을 두었습니다"
        },
        {
            title: "MOMENTUM",
            desc: "그저 똑같은 작품이 아닌 테마를 추가해 다양한 느낌으로 즐길 수 있게\n하는 것에 중점을 두었습니다"
        },
        {
            title: "AIRBNB",
            desc: "Grid Layout과 반응형 디자인에 중점을 두고 클론을 제작하였습니다"
        }
    ]
    const handleClick = (item)=>{
        if(item === "NETFLIX"){
            setNetOpen(true);
        } else if(item === "MOMENTUM"){
            setMomOpen(true);
        } else {
            setAirOpen(true);
        }
    }
    return (
        <div id='clone-coding'>
            <h1>CLONE CODING<br/>PROJECT</h1>
            <div className='project-wrap'>
                {
                    projects.map((item,idx)=>{
                        return (<div key={idx} className={`project-item ${idx === 0 ? "netflix" : idx === 1 ? "momentum" : "airbnb"}`}>
                            <div className={`project-photo ${idx === 0 ? "netflix" : idx === 1 ? "momentum" : "airbnb"}`}></div>
                            <div className='content'>
                                <h3>{item.title}</h3>
                                {item.title === "NETFLIX" ? 
                                <div className='tools'>
                                    <span>React</span>
                                    <span>React-Router</span>
                                    <span>Axios</span>
                                    <span>Slick-Carousel</span>
                                </div> : item.title === "MOMENTUM" ? 
                                <div className='tools'>
                                    <span>React</span>
                                    <span>Weather API</span>
                                </div> : 
                                <div className='tools'>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>SCSS</span>
                                </div>}
                                <p className='desc'>{item.desc}</p>
                                <button onClick={()=>{handleClick(item.title)}}>정보 더보기</button>
                            </div>
                        </div>)
                    })
                }
            </div>
            { netOpen && <Netflix isOpen={netOpen} onClose={()=>{setNetOpen(false)}}/>}
            { momOpen && <Momentum isOpen={momOpen} onClose={()=>{setMomOpen(false)}}/>}
            { airOpen && <Airbnb isOpen={airOpen} onClose={()=>{setAirOpen(false)}}/>}
        </div>
    );
};

export default CloneCoding;