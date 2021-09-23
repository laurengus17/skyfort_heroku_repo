import React from 'react';
import dl from '../../images/dannyL.png';
import './Employees.css'

const DannyL = () => {
    return (
        <>
        <div className='employees_display'>
            <img className='employees_image' src={dl} alt='danny' />
            <div className='employee_text_container'>
                <p className='employee_name'>Danny Lin</p>
                <p className='employee_title'>Senior Mobile Developer</p>
            </div>
        </div>
        </>
    )
}

export default DannyL;