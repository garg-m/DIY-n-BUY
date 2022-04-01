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
            <img src="https://drive.google.com/uc?id=1GGXEBN_zoNdBlOim49AYuTAgq7uGff2r" alt="img"/>
            </div>
            <div id="case" style={imgStyle}>
                <img src="https://drive.google.com/uc?id=13HCi4ZhEI3qlz8YysuzYgtYIiWruUD54" alt="img"/>
            </div>
            <div  id="dials" style={imgStyle}>
                <img src="https://drive.google.com/uc?id=1bXyjy5skNwPxMSXTqxqVAJRgbH3ziJbk" alt="img"/>
            </div>
            <div  id="hands" style={imgStyle}>
                <img src="https://drive.google.com/uc?id=15N23D5nXnA3mHAhngcWXw1Ztnjc5anbS" alt="img" />
            </div>
            <div id="crown" style={imgStyle}>
                <img src="https://drive.google.com/uc?id=1MvLUJsExLF18D5HzPZH9Hh3vEkCgz5m4" alt="img" />
            </div>
            <div  id="bezel" style={imgStyle}>
                <img src="https://drive.google.com/uc?id=1EXoFqI-0zGLMPhcqr8sNVcDaFSRg9XSQ" alt="img" />
            </div>
            <div  id="bezel-inserts" style={imgStyle}>
                <img src="https://drive.google.com/uc?id=1lTBuDdzufhVyo7i2N0oQlx19g1g9XN3v" alt="img" />
            </div>
            <div id="chapter-rings" style={imgStyle}>
                <img src="https://drive.google.com/uc?id=1KrPGdoYzKrDcSpNRmpfaeKPNTmajD-tv" alt="img"/>
            </div>
        </div>
    )
}
