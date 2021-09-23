import React, { useEffect, useRef, useState } from "react";
import './Origins.css'

const Origins = () => {
    const [visible, setVisible] = useState(true);
    const DOM = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(DOM.current);
        return () => observer.unobserve(DOM.current);
    }, []);

    return (
        <>
        <h1 className='origins_title'>Origins</h1>
        <div className={`fade_in_origins ${visible ? 'visible' : ''}`}
            ref={DOM}>
            <p className='origins_tagline'>SkyFort was founded at the beginning of the pandemic to provide a secure tool 
            <br /> to keep people safe and connected while working from home.</p>
        </div>
        <div className='origins_spacing'></div>
        <div className={`fade_in_origins_two ${visible ? 'visible' : ''}`}
            ref={DOM}>
            <p className='origins_statement'>We were founded out of a desperate need to help individuals, businesses, and institutions 
            <br />secure their connections to the internet, while remaining a privacy-first organization. Fast 
            <br />forward to today, and we are building a network for everyone, and making network security
            <br /> accessible to anyone.</p>
        </div>
        </>
    )
}

export default Origins;