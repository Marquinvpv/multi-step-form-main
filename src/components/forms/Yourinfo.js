import React, { useState } from 'react';

import "../../css/form.css";

const Yourinfo = ({ step, onFieldsetData, nameError }) => {

    const handleChange = (event) => {
        const { name, value } = event.target;
        onFieldsetData(name, value);
    };

    return (
        <fieldset className={step === 1 ? 'yi-container' : 'not-active'}>
            <div className='wrapper'>
                <p className='title-yi'>Personal info</p>
                <p className='desc-yi'>Please provide your name, email address, and phone number.</p>
            </div>

            <div className='wrapper'>
                <label>Name</label>
                {nameError && (
                    <input id='NAME' name='NAME' className='NAME' type='text' onChange={handleChange} data-error="this field is required" />
                )}
                {!nameError && (
                    <input id='NAME' name='NAME' type='text' onChange={handleChange} data-error="this field is required" />
                )}
            </div>
            <div className='wrapper'>
                <label>Email Address</label>
                <input id='EMAIL' type='email' />
            </div>
            <div className='wrapper'>
                <label>Phone Number</label>
                <input id='PHONE' type='text' />
            </div>
        </fieldset>
    );
}

export default Yourinfo;