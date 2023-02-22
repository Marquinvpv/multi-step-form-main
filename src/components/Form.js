import React, {useState} from 'react';
import Addons from './forms/Addons';
import Selectplan from './forms/Selectplan';
import Summary from './forms/Summary';
import Yourinfo from './forms/Yourinfo';

import "../css/form.css";

const Form = ({step, setStep}) => {

    const[messageError,setMessageError] = useState();
    const[fieldsetData, setFieldsetData] = useState({});

    const submitHandler = (e) => {
        setMessageError();
        if(fieldsetData.NAME.length < 1) {
            setMessageError('This field is required');
            return messageError;
        }
        step < 4 ? setStep(step + 1) : setStep(4); 
    };

    const handleFieldsetData = (name, value) => {
        setFieldsetData({...fieldsetData,[name]:value});
    };


    return ( 
        <form 
        onSubmit={
            (e) => {e.preventDefault(); 
                submitHandler(e);
        }}>
            <Yourinfo 
                step = {step}
                onFieldsetData={handleFieldsetData}
                messageError = {messageError}
            />

            <Selectplan 
                step = {step}
            />

            <Addons 
                step = {step}
            />

            <Summary 
                step = {step}
            />
            <div className='button-container'>
                <button id='step-button' type='submit'>{step !== 4 ? 'Next Step' : 'Confirm'}</button>
                <button onClick={() => {step > 1 ? setStep(step - 1) : setStep(1)}} type='button' className={step !== 1 ? 'goback' : 'not-active'}>Go Back</button>
            </div>
        </form>
     );
}
 
export default Form;