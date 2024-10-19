import React from "react";
import logo from "../images/cuvette-logo.png";
import "./Registration.css";
import { IoMdContact } from "react-icons/io";
import SignUpForm from "./SignupForm";
import EmailVerify from "./EmailVerify";
import { useState } from "react";

function Registration() {
  const [currentForm, setCurrentForm] = useState('signup'); // Manage form state

  const handleProceed = () => {
    setCurrentForm('emailVerify'); // Switch to EmailVerify form
  };
  return (
    <div className="Container">
      <header>
        <img src={logo}></img>
        <p>Contact</p>
      </header>

      <div className="main">
        <div className="Paragraph">
           <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
           </p>
        </div>
        <div className="Signup-form">
           
        {currentForm === 'signup' ? (
        <SignUpForm onProceed={handleProceed} />
           ) : (
        <EmailVerify />
         )}
        
        </div>
      </div>
      
    </div>
  );
}

export default Registration;
