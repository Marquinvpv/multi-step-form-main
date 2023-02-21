import React from 'react';

import "../../css/form.css";

const Selectplan = ({step}) => {
    return (  
        <fieldset className={ step === 2 ? 'sp-container':'not-active'}>
            <h1>Select Plan</h1>
        </fieldset>
    );
}
 
export default Selectplan;