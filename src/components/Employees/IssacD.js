import React from 'react';
import id from '../../images/isaacD.png';
import './Employees.css'

const IsaacD = () => {
    return (
        <>
        <div className='employees_display'>
            <img className='employees_image'  src={id} alt='isaac' />
            <div className='employee_text_container'>
                <p className='employee_name'>Isaac Dare</p>
                <p className='employee_title'>Marketing Manager</p>
            </div>
        </div>
        </>
    )
}

export default IsaacD;