import React from 'react';
<<<<<<< HEAD
//import './visualizerSegment.css';
export const VisualizerSegment = () => {
    
    // changePartImage = (partName,newImageUrl) =>{
    //     console.log("hello");
    return (
        <div class="watch-wrap text-center">
            <div class="img-wrap  strap-img-wrap" id="straps"> <img src="https://usa.crystaltimes.net/wp-content/themes/pro-child/Images/watch1/straps.png" alt="img" class="w-100"/></div>
                <div class="case-img-wrap" id="case">  <img src="https://usa.crystaltimes.net/wp-content/uploads/2019/01/CT700-Polished-Front-2.png" alt="img" class="w-100"/> </div>
                    <div class="dail-img-wrap" id="dials"> <img src="https://usa.crystaltimes.net/wp-content/uploads/2021/08/SKX007-Dial-1.png" alt="img" class="w-100"/></div>
                        <div class="hands-img-wrap" id="hands"> <img src="https://usa.crystaltimes.net/wp-content/uploads/2020/12/CT841-3.png" alt="img" class="w-100"/></div>
                        <div class="crown-img-wrap" id="crown"> <img src="https://usa.crystaltimes.net/wp-content/uploads/2021/05/CT208-Polished-1.png" alt="img" class="w-100"/></div>
                        <div class="bezel-img-wrap" id="bezel"> <img src="https://usa.crystaltimes.net/wp-content/uploads/2017/02/CT202CE-Polished-4.png" alt="img" class="w-100"/></div>
                        <div class="bezel_insert-img-wrap" id="bezel-inserts"> <img src="https://usa.crystaltimes.net/wp-content/uploads/2020/05/CT-680-Bezel-Insert-2.png" alt="img" class="w-100"/></div>
                        <div class="chapter_ring-img-wrap" id="chapter-rings"> <img src="https://usa.crystaltimes.net/wp-content/uploads/2021/08/SKX007-Chapter-Ring-3.png" alt="img" class="w-100"/></div>
                        </div>
    )
    }
    
   

export default VisualizerSegment;
=======
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
>>>>>>> b43b24fb6d57768443f9576d500f2e6eb7f01ce6
