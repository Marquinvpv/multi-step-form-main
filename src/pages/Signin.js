import React, { useState } from "react";
import Form from "../components/Form";
import Steps from "../components/Steps";

import "../css/signin.css";

const Signin = () => {

    const [step, setStep] = useState(1);

    return ( 
        <section className="signin-container">
            <Steps
                step = {step}
            />
            <Form 
                step = {step}
                setStep = {setStep}
            />
        </section>
     );
}
 
export default Signin;