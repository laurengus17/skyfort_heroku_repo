import React, { useEffect, useRef, useState } from 'react';
import BrandonM from './BrandonM';
import BrandonV from './BrandonV';
import DannyL from './DannyL';
import IsaacD from './IssacD';
import TaliaR from './TaliaR';
import ChrisR from './ChrisR';
import ZachG from './ZachG';
import JoinUs from './JoinUs';
import './Employees.css'

const AllEmployees = () => {
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
        <>
        <div className={`fade_in ${visible ? 'visible' : ''}`}
            ref={DOM}
        >
            <div className='employees_each_container'>
                <BrandonV />
                <BrandonM />
                <DannyL />
                <IsaacD />
                <TaliaR />
                <ChrisR />
                <ZachG />
                <JoinUs />
            </div>
        </div>
        </>
    )
}

export default AllEmployees;