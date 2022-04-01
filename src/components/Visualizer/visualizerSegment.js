import React from 'react';
export const VisualizerSegment = () => {

    const divStyle={
        height: '456px',
        width:'408px',
    }

    const imgStyle={
        height: '456px',
        width:'408px',
        position: 'absolute'
    }
    
    return (

        <div style={divStyle}>
            <div id="straps" style={imgStyle}>             
            <img src="https://usa.crystaltimes.net/wp-content/themes/pro-child/Images/watch1/straps.png" alt="img"/>
            </div>
            <div id="case" style={imgStyle}>
                <img src="https://usa.crystaltimes.net/wp-content/uploads/2019/01/CT700-Polished-Front-2.png" alt="img"/>
            </div>
            <div  id="dials" style={imgStyle}>
                <img src="https://usa.crystaltimes.net/wp-content/uploads/2021/08/SKX007-Dial-1.png" alt="img"/>
            </div>
            <div  id="hands" style={imgStyle}>
                <img src="https://usa.crystaltimes.net/wp-content/uploads/2020/12/CT841-3.png" alt="img" />
            </div>
            <div id="crown" style={imgStyle}>
                <img src="https://usa.crystaltimes.net/wp-content/uploads/2021/05/CT208-Polished-1.png" alt="img" />
            </div>
            <div  id="bezel" style={imgStyle}>
                <img src="https://usa.crystaltimes.net/wp-content/uploads/2017/02/CT202CE-Polished-4.png" alt="img" />
            </div>
            <div  id="bezel-inserts" style={imgStyle}>
                <img src="https://usa.crystaltimes.net/wp-content/uploads/2020/05/CT-680-Bezel-Insert-2.png" alt="img" />
            </div>
            <div id="chapter-rings" style={imgStyle}>
                <img src="https://usa.crystaltimes.net/wp-content/uploads/2021/08/SKX007-Chapter-Ring-3.png" alt="img"/>
            </div>
        </div>
    )
}