import React from 'react';
import cr from '../../images/chrisR.png';
import './Employees.css'

const ChrisR = () => {
    return (
        <>
        <div className='employees_display'>
            <img className='employees_image' src={cr} alt='chris' />
            <div className='employee_text_container'>
                <p className='employee_name'>Chris Rote</p>
                <p className='employee_title'>Technical Advisor</p>
            </div>
        </div>
        </>
    )
}

export default ChrisR;