import React from 'react';

import "../../css/form.css";

const Addons = ({step}) => {
    return ( 
        <fieldset className={ step === 3 ? 's-container':'not-active'}>
            <h1>Add ons</h1>
        </fieldset>
     );
}
 
export default Addons;