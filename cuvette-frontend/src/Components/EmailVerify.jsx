import React, { useState } from 'react';
import './Signupform.css';
import { CiMail } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

// Parent Component to manage form steps
const FormContainer = () => {
  const [step, setStep] = useState(1); // State to track the current step

  // Function to handle form step change
  const goToNextStep = () => {
    setStep(step + 1); // Proceed to the next step
  };

  return (
    <div>
      {step === 1 && <EmailVerify onProceed={goToNextStep} />} {/* Show EmailVerify form */}
      {step === 2 && <Verify />} {/* Show Verify form */}
    </div>
  );
};

export default FormContainer;

// EmailVerify Component
const EmailVerify = ({ onProceed }) => {
  const [formData, setFormData] = useState({
    companyEmail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onProceed(); // Call the function passed from FormContainer to proceed to the next form
  };

  return (
    <>
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <p>Lorem Ipsum is simply dummy text.</p>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-with-icon">
            <CiMail className="icon-inside" />
            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              placeholder="      Email OTP"
              required
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#0B66EF',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Verify
          </button>
        </form>
      </div>
    </>
  );
};

// Verify Component
const Verify = () => {
  const [formData, setFormData] = useState({
    otp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Verify Succeessfully")
    navigate('/CreateInterview');
  };

  return (
    <>
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <p>Lorem Ipsum is simply dummy text</p>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-with-icon">
            <CiMail className="icon-inside" />
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="      Enter OTP"
              required
            />
          </div>
        </form>
      </div>
    </>
  );
};
