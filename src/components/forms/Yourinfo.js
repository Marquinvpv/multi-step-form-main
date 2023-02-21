import React from 'react';

import "../../css/form.css";

const Yourinfo = ({step}) => {
    return (  
        <fieldset className={step === 1 ? 'yi-container' : 'not-active'}>
            <div className='wrapper'>
                <p className='title-yi'>Personal info</p>
                <p className='desc-yi'>Please provide your name, email address, and phone number.</p>
            </div>
            
            <div className='wrapper'>
                <label>Name</label>
                <input id='NAME' type='text' required/>
            </div>
            <div className='wrapper'>
                <label>Email Address</label>
                <input id='EMAIL' type='email' required/>
            </div>
            <div className='wrapper'>
                <label>Phone Number</label>
                <input id='PHONE' type='text' required/>
            </div>
        </fieldset>
    );
}
 
export default Yourinfo;