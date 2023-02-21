import React from 'react';

import "../css/steps.css";

const Steps = ({step}) => {
    return ( 
        <ul className='step-container'>
            <li className='step-li'>
                <p className={step === 1 ? ' number active ' : 'number'}>1</p>
                <div>
                    <span className='step-number'>STEP 1</span>
                    <p className='step-name'>YOUR INFO</p>
                </div>
            </li>
            <li className='step-li'>
                <p className={step === 2 ? ' number active ' : 'number'}>2</p>
                <div>
                    <span className='step-number'>STEP 2</span>
                    <p className='step-name'>SELECT PLAN</p>
                </div>
            </li>
            <li className='step-li'>
                <p className={step === 3 ? ' number active ' : 'number'}>3</p>
                <div>
                    <span className='step-number'>STEP 3</span>
                    <p className='step-name'>ADD-ONS</p>
                </div>
            </li>
            <li className='step-li'>
                <p className={step === 4 ? ' number active ' : 'number'}>4</p>
                <div>
                    <span className='step-number'>STEP 4</span>
                    <p className='step-name'>SUMMARY</p>
                </div>
            </li>
        </ul>
     );
}
 
export default Steps;