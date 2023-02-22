import React, { useState } from 'react';

import "../../css/form.css";

const Yourinfo = ({ step, onFieldsetData, messageError }) => {

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
                {messageError ? (
                    <>
                        <label>Name <span className='error-message'>{messageError}</span></label>
                        <input className='error-input' name='NAME' type='text' onChange={handleChange} />

                        <label>Email Address<span className='error-message'>{messageError}</span></label>
                        <input className='error-input' id='EMAIL' type='email' onChange={handleChange} />

                        <label>Phone Number<span className='error-message'>{messageError}</span></label>
                        <input className='error-input' id='PHONE' type='text' onChange={handleChange} />
                    </>
                ) : (
                    <>
                        <label>Name</label>
                        <input id='NAME' name='NAME' type='text' onChange={handleChange} />

                        <label>Email Address</label>
                        <input id='EMAIL' type='email' onChange={handleChange} />

                        <label>Phone Number</label>
                        <input id='PHONE' type='text' onChange={handleChange} />
                    </>
                )}
            </div>
        </fieldset>
    );
}

export default Yourinfo;