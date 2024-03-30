import React, { useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
 
const ScrollButton = () => {
 
    const [visible, setVisible] = useState(true)
 
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollToBottom;
        if (scrolled > 0) {
            setVisible(false)
        }
        else if (scrolled <= 0) {
            setVisible(true)
        }
    };
 
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    };
 
    window.addEventListener('scroll', toggleVisible);
 
    return (
        <button className='btn btn-light' onClick={scrollToBottom} style={{color:"orangered"}}>
            <FaArrowCircleDown 
                style={{ display: visible ? 'inline' : 'none',backgroundColor:"white" ,color:"orangered",marginRight:"5px"}} />
                Fill the from below
        </button>
    );
}
 
export default ScrollButton;
