import React, { useState } from 'react';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import './index.scss'
 
const ScrollButtonToUp = () => {
 
    const [visible, setVisible] = useState(true)
 
    const toggleVisible = () => {
        const scrolled = document.documentElement.ScrollButtonToUp;
        if (scrolled > 0) {
            setVisible(false)
        }
        else if (scrolled <= 0) {
            setVisible(true)
        }
    };
 
    const scrollToUp = () => {
        window.scrollTo({
            top:document.documentElement.scrollTop=0,
            behavior: "smooth",
            
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    };
 
 
    return (

        <button className='btn btn-light ScrollButtonToUp' onClick={scrollToUp} style={{color:"orangered"}}>
            <FaArrowCircleUp 
                style={{ display: visible ? 'inline' : 'none',backgroundColor:"white" ,color:"orangered",marginRight:"5px"}} />
                
        </button>
    );
}
 
export default ScrollButtonToUp;
