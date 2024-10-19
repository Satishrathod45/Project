import React, { useState } from 'react';
import './Signupform.css';
import { IoIosContact } from "react-icons/io"; 
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { userRegister } from '../Action/action';

const SignUpForm = ({ onProceed }) => {  // Destructure onProceed from props
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    companyName: '',
    companyEmail: '',
    employeeSize: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { name, phone_no,companyn_name, company_email,employee_size } = formData;
      const result = await userRegister(name, phone_no,companyn_name, company_email,employee_size);
      console.log('Registration successful:', result);
      onProceed();  
    } catch (error) {
      console.error('Error during registration:', error);
    }
   
  };

  return (
    <>
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <p>Lorem Ipsum is simply dummy text</p>
        <form onSubmit={handleSubmit} className="signup-form">
          
          <div className="input-with-icon">
            <IoIosContact className="icon-inside" /> 
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="      Name"
              required
            />
          </div>

          <div className="input-with-icon">
            <FaPhoneAlt className="icon-inside" />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="        Phone number"
              required
            />
          </div>

          <div className="input-with-icon">
            <IoIosContact className="icon-inside" /> 
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="      Company Name"
              required
            />
          </div>

          <div className="input-with-icon">
            <CiMail className="icon-inside" />
            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              placeholder="      Company email"
              required
            />
          </div>

          <div className="input-with-icon">
            <IoIosPeople className="icon-inside" />
            <input
              type="number"
              id="employeeSize"
              name="employeeSize"
              value={formData.employeeSize}
              onChange={handleChange}
              placeholder="      Employees Size"
              required
            />
          </div>

          <p>By clicking on proceed you will accept our</p>
          <p className='paragraph'><span>Terms</span> & <span>Conditions</span></p>
          <button type="submit">Proceed</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
