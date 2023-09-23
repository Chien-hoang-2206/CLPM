import React from 'react';
import './style.css'
const Mybutton = (props) => {
    const { onclick, label = 'Nhấn nút' } = props;
    return (
        <button onClick={onclick} className="learn-more"> 
            {props.children}
            <div id="clip">
                <div id="leftTop" class="corner"></div>
                <div id="rightBottom" class="corner"></div>
                <div id="rightTop" class="corner"></div>
                <div id="leftBottom" class="corner"></div>
            </div>
            <span id="rightArrow" class="arrow"></span>
            <span id="leftArrow" class="arrow"></span>
        </button>
    );
};

export default Mybutton;