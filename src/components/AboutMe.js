import React, { useEffect, useRef } from 'react';
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import gsap from 'gsap';

const AboutMe = () => {
    const icons =[
        "photoshop", "illustrator","figma","html", "css", "javascript", "react", "git", "github", "scss", "supabase", "slack"
    ]
    const sliderRef = useRef(null);
    const arrowRef = useRef(null);
    useEffect(()=>{
        // const tl = gsap.timeline({repeat: -1})
        // tl.to(sliderRef.current, {
        //     x: -30,
        //     duration: 1.5,
        //     ease: "power1.inOut"
        // })
        // .to(sliderRef.current, {
        //     x: 30,
        //     duration: 3,
        //     ease: "power1.inOut"
        // })
        // .to(sliderRef.current, {
        //     x: 0,
        //     duration: 1.5,
        //     ease: "power1.inOut"
        // });
        gsap.set(sliderRef.current, {x: -30});
        gsap.to(sliderRef.current, {
            x: 30,
            duration: 3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        })
        gsap.to(arrowRef.current, {
            y: 20,
            duration: 0.8,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
        });
    },[])
    return (
        <div id='about-me'>
            <div className='top'>
                <div className='left'>
                    <p className='fe-title'>FRONT-END DEVELOPER</p>
                    <h1>안녕하세요,<br/>저는 <span>문정우</span>입니다.</h1>
                    <p className='exp'>빠른 <span>적응력</span>을 바탕으로<br/>사람들과의 원활한 <span>협동</span>을 중시하고 <span>경청</span>하며<br/>꼼꼼한 <span>메모</span>를 통해 <span>더 나은 결과</span>를 만들어 내겠습니다.</p>
                    <div className='icons'>
                        <MdMailOutline />
                        <FaGithub />
                        <FiPhone />
                    </div>
                </div>
                <div className='right'></div>
            </div>
            <div className='middle'>
                <div ref={sliderRef} className='container'>
                    {
                        icons.map((value,key)=>{
                            return (<img key={key} src={`/images/skill-icons/${value}-icon.svg`}/>)
                        })
                    }
                </div>
            </div>
            <div className='bottom'>
                <IoIosArrowDown ref={arrowRef}/>
            </div>
        </div>
    );
};

export default AboutMe; 