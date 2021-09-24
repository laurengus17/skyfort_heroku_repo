import React, { useEffect, useRef, useState }  from "react";
import about from '../../images/about_img.png';
import './GrowingTeam.css';

const GrowingTeams = () => {
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
        <div className='growing_container'>
            <div className={`fade_in_image ${visible ? 'visible' : ''}`}
            ref={DOM}>
            <div className='image_container'>
                <img className='growing_image' src={about} alt='hiring' sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 44vw, (max-width: 1279px) 48vw, 616px"/>
            </div>
            </div>
            <div  className={`fade_in_text ${visible ? 'visible' : ''}`}
            ref={DOM}>
                <div className='growing_text_container'>
                    <p className='growing_title'>WHAT WE'RE MADE OF</p>
                    <h1 className='growing_tagline'>Our team is <br />growing.</h1>
                    <p className='growing_statement'>We are looking for talented individuals who want to
                    <br /> join a startup that is actually making a tangible 
                    <br />difference. We are currently evergreen on all 
                    <br />positions, meaning that while we may not be looking 
                    <br />to fill a specific role, we are always interested in 
                    <br />meeting passionate, driven, and exceptional people.</p>
                </div>
            </div>
        </div>
    )
}

export default GrowingTeams;