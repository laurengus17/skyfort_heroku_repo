import React from 'react';
import bv from '../../images/brandonV.png';
import './Employees.css'

const BrandonV = () => {
    return (
        <>
        <div className='employees_display'>
            <img className='employees_image' src={bv} alt='brandon' />
            <div className='employee_text_container'>
                <p className='employee_name'>Brandon Veiseh</p>
                <p className='employee_title'>CEO and Founder</p>
            </div>
        </div>
        </>
    )
}

export default BrandonV;