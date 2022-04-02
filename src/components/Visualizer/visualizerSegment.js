import React from 'react';
import { useState, useEffect } from "react";
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
            <button></button>
            <div style={imgStyle}>             
            <img id="straps" src="https://drive.google.com/uc?id=1GGXEBN_zoNdBlOim49AYuTAgq7uGff2r" alt="img"/>
            </div>
            <div style={imgStyle}>
                <img id="case" src="https://drive.google.com/uc?id=13HCi4ZhEI3qlz8YysuzYgtYIiWruUD54" alt="img"/>
            </div>
            <div style={imgStyle}>
                <img  id="dials" src="https://drive.google.com/uc?id=1bXyjy5skNwPxMSXTqxqVAJRgbH3ziJbk" alt="img"/>
            </div>
            <div style={imgStyle}>
                <img id="hands" src="https://drive.google.com/uc?id=15N23D5nXnA3mHAhngcWXw1Ztnjc5anbS" alt="img" />
            </div>
            <div style={imgStyle}>
                <img id="crown" src="https://drive.google.com/uc?id=1MvLUJsExLF18D5HzPZH9Hh3vEkCgz5m4" alt="img" />
            </div>
            <div style={imgStyle}>
                <img  id="bezel" src="https://drive.google.com/uc?id=1EXoFqI-0zGLMPhcqr8sNVcDaFSRg9XSQ" alt="img" />
            </div>
            <div  style={imgStyle}>
                <img id="bezel-inserts" src="https://drive.google.com/uc?id=1lTBuDdzufhVyo7i2N0oQlx19g1g9XN3v" alt="img" />
            </div>
            <div style={imgStyle}>
                <img id="chapter-rings" src="https://drive.google.com/uc?id=1KrPGdoYzKrDcSpNRmpfaeKPNTmajD-tv" alt="img"/>
            </div>
        </div>
        
    )
}
