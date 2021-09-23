import React from 'react';
import zg from '../../images/zachG.png';
import './Employees.css'

const ZachG = () => {
    return (
        <>
        <div className='employees_display'>
            <img className='employees_image' src={zg} alt='zach' />
            <div className='employee_text_container'>
                <p className='employee_name'>Zach Greene</p>
                <p className='employee_title'>Senior Growth Manager</p>
            </div>
        </div>
        </>
    )
}

export default ZachG;