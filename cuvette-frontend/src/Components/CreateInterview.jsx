import React from 'react';
import './Registration.css';
import logo from '../images/cuvette-logo.png';
import { useNavigate } from 'react-router-dom';

function CreateInterview() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCreateInterview = () => {
    // Navigate to Job Portal when the button is clicked
    navigate('/jobPortal');
  };

  return (
    <div className="Container">
      <header>
        <img src={logo} alt="Logo" />
        <p>Contact</p>
      </header>
      <button
        type="button" // Change type to "button" to prevent form submission
        onClick={handleCreateInterview} // Add onClick event to navigate
        style={{
          margin: '100px 80px',
          padding: '10px',
          backgroundColor: '#0B66EF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Create Interview
      </button>
    </div>
  );
}

export default CreateInterview;
