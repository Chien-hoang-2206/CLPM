import React from 'react';
import './style.css'
const Mybutton = (props) => {
    const {onclick} = props ; 
    return (
        <button onClick={onclick} className="learn-more"> Nhân nút
        </button>
    );
};

export default Mybutton;