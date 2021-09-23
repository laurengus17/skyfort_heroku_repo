import React from 'react';
import './Employees.css'

const JoinUs = () => {
    return (
        <>
        <div className='employees_display'>
            <div className='join_text_container'>
                <p className='join_title'>Want to join our team?</p>
                <p className='email'>Email us</p>
                <a className='email_link' href='mailto:Support@SkyFort.io'>Support@SkyFort.io</a>
            </div>
        </div>
        </>
    )
}

export default JoinUs;