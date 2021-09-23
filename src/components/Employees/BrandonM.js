import React from 'react';
import bm from '../../images/brandonM.png';
import './Employees.css'

const BrandonM = () => {
    return (
        <>
        <div className='employees_display'>
            <img className='employees_image' src={bm} alt='brandon' />
            <div className='employee_text_container'>
                <p className='employee_name'>Brandon Massie</p>
                <p className='employee_title'>CTO</p>
            </div>
        </div>
        </>
    )
}

export default BrandonM;