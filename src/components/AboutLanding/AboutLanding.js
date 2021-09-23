import React, { useEffect } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Origins from '../Origins/Origins';
import GrowingTeams from '../GrowingTeam/GrowingTeam';
import AllEmployees from '../Employees/AllEmployees';
import './AboutLanding.css'

const AboutLanding = () => {

    // useEffect(() => {
    //     const scrollTransform = () => {
    //         if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //             document.querySelector('.image_container')?.classList.add('fade_in');
    //         }
    //     }
    //     window.onscroll = function() { scrollTransform() };
    // }, [])

    return (
        <>
        <div className='about_us'>
            <AboutUs />
        </div>
        <div className='origins'>
            <Origins />
        </div>
        <div className='employee_container'>
            <AllEmployees />
        </div>
        <div className='growing_team'>
            <GrowingTeams />
        </div>
        </>
    )
}

export default AboutLanding;