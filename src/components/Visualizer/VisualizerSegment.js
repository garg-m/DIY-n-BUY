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

    var selectedStrapObj = localStorage.getItem('selectedStrap')
    var selectedCaseObj = localStorage.getItem('selectedCase')
    var selectedDialObj = localStorage.getItem('selectedDial')
    var selectedHandsObj = localStorage.getItem('selectedHands')
    var selectedCrownObj = localStorage.getItem('selectedCrown')
    var selectedBezelRingObj = localStorage.getItem('selectedBezelRing')
    var selectedBezelInsertObj = localStorage.getItem('selectedBezelInsert')
    var selectedChapterRingObj = localStorage.getItem('selectedChapterRing')


    return (
    <div style={divStyle}>
            <button></button>

            <div style={imgStyle}> 
            { (selectedStrapObj!=null) ? <img id="strap" src={JSON.parse(selectedStrapObj).imagepath} alt="img"/> : <img id="strap" src="https://drive.google.com/uc?id=1GGXEBN_zoNdBlOim49AYuTAgq7uGff2r" alt="img"/> }
            </div>
            <div style={imgStyle}>
            { (selectedCaseObj!=null) ? <img id="case" src={JSON.parse(selectedCaseObj).imagepath} alt="img"/> : <img id="case" src="https://drive.google.com/uc?id=13HCi4ZhEI3qlz8YysuzYgtYIiWruUD54" alt="img"/> }
            
            </div>
            <div style={imgStyle}>
            { (selectedDialObj!=null) ? <img id="dial" src={JSON.parse(selectedDialObj).imagepath} alt="img"/> : <img  id="dial" src="https://drive.google.com/uc?id=1bXyjy5skNwPxMSXTqxqVAJRgbH3ziJbk" alt="img"/> }
                
            </div>
            <div style={imgStyle}>
            { (selectedHandsObj!=null) ? <img id="hands" src={JSON.parse(selectedHandsObj).imagepath} alt="img"/> : <img id="hands" src="https://drive.google.com/uc?id=15N23D5nXnA3mHAhngcWXw1Ztnjc5anbS" alt="img" /> }
                
            </div>
            <div style={imgStyle}>
            { (selectedCrownObj!=null) ? <img id="crown" src={JSON.parse(selectedCrownObj).imagepath} alt="img"/> :  <img id="crown" src="https://drive.google.com/uc?id=1MvLUJsExLF18D5HzPZH9Hh3vEkCgz5m4" alt="img" /> }
               
            </div>
            <div style={imgStyle}>
            { (selectedBezelRingObj!=null) ? <img id="bezelring" src={JSON.parse(selectedBezelRingObj).imagepath} alt="img"/> : <img  id="bezelring" src="https://drive.google.com/uc?id=1EXoFqI-0zGLMPhcqr8sNVcDaFSRg9XSQ" alt="img" /> }
                
            </div>
            <div  style={imgStyle}>
            { (selectedBezelInsertObj!=null) ? <img id="bezelinserts" src={JSON.parse(selectedBezelInsertObj).imagepath} alt="img"/> : <img id="bezelinserts" src="https://drive.google.com/uc?id=1lTBuDdzufhVyo7i2N0oQlx19g1g9XN3v" alt="img" />}
                
            </div>
            <div style={imgStyle}>
            { (selectedChapterRingObj!=null) ? <img id="chapterrings" src={JSON.parse(selectedChapterRingObj).imagepath} alt="img"/> : <img id="chapterrings" src="https://drive.google.com/uc?id=1KrPGdoYzKrDcSpNRmpfaeKPNTmajD-tv" alt="img"/> }
            </div>
            
        </div>
    )
}
