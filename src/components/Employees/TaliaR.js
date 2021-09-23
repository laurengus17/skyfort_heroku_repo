import React from 'react';
import tr from '../../images/taliaR.png';
import './Employees.css'

const TaliaR = () => {
    return (
        <>
        <div className='employees_display'>
            <img className='employees_image' src={tr} alt='talia' />
            <div className='employee_text_container'>
                <p className='employee_name'>Talia Reisbord</p>
                <p className='employee_title'>Head of Design</p>
            </div>
        </div>
        </>
    )
}

export default TaliaR;