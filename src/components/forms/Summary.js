import React from 'react';

import "../../css/form.css";

const Summary = ({step}) => {
    return ( 
        <fieldset className={ step === 4 ? 's-container':'not-active'}>
            <h1>Summary</h1>
        </fieldset>
     );
}
 
export default Summary;