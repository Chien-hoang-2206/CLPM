import React from 'react';
import './style.css'
const Mybutton = (props) => {
    const {onclick,label = 'Nhấn nút'} = props ; 
    return (
        <button onClick={onclick} className="learn-more"> {label}
        </button>
    );
};

export default Mybutton;