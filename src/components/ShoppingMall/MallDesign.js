import React from 'react';

const MallDesign = () => {
    return (
        <div id='mall-design'>
            <h1>DESIGN SYSTEM</h1>
            <div className='color'>
                <h3>COLOR</h3>
                <div className='color-wrap'>
                    <div className='one'>
                        <p>#7A8B55</p>
                        <h4>PRIMARY<br/>BASE</h4>
                    </div>
                    <div className='two'>
                        <p>#55613A</p>
                        <h4>PRIMARY<br/>HOVER</h4>
                    </div>  
                    <div className='three'>
                        <p>#3E5D4B</p>
                        <h4>SECONDARY<br/>BASE</h4>
                    </div>  
                    <div className='four'>
                        <p>#5C5C5C</p>
                        <h4>MAIN TEXT</h4>
                    </div>  
                    <div className='five'>
                        <p>#E5E2DA</p>
                        <h4>SUB TEXT</h4>
                    </div>  
                </div>
            </div>
            <div className='font'>
                <h3>FONT</h3>
                <div className='font-img'></div>
            </div>
            <div className='logo'>
                <h3>LOGO</h3>
                <div className='logo-img'></div>
            </div>
            <h1 className='res'>RESPONSIVE DESIGN</h1>
            <div className='res-design'>
                <div className='top'>
                    <div className='phone-img'></div>
                    <div className='tablet-img'></div>
                </div>
                <div className='bottom'>
                    <div className='desktop-img'></div>
                </div>
            </div>
        </div>
    );
};

export default MallDesign;