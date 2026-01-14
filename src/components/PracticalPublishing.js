import React from 'react';

const PracticalPublishing = () => {
    const projects = [
        {
            title: "VOGUE GRID",
            tools: "Figma / HTML5 / CSS3"
        },
        {
            title: "BOOKSTORE",
            tools: "Figma / HTML5 / CSS3"
        },
        {
            title: "PINTEREST",
            tools: "Figma / HTML5 / CSS3 / JavaScript"
        },
        {
            title: "LOGGER",
            tools: "Figma / HTML5 / CSS3"
        }
    ]
    return (
        <div id='practical-publishing'>
            <h1>PRACTICAL<br/>PUBLISHING</h1>
            <div className='project-wrap'>
                {
                    projects.map((item,idx)=>{
                        return (
                            <div key={idx} className='item'>
                                <div className={`photo ${idx === 0 ? "vogue" : idx === 1 ? "book" : idx === 2 ? "pin" : "logger"}`}></div>
                                <div className='text'>
                                    <h3>{item.title}</h3>
                                    <p className='tools'>{item.tools}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PracticalPublishing;