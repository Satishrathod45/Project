import React, { useState } from 'react';
import "./Registration.css";
import logo from "../images/cuvette-logo.png";

const JobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    experienceLevel: '',
    candidate: '',
    endDate: '',
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
  };

  return (
    <div className="Container">
    <header>
      <img src={logo}></img>
      <p>Contact</p>
    </header>
    <div style={{ maxWidth: '400px', margin: '60px auto' }}>
      <h2>Job Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Job Title */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="jobTitle" style={{ display: 'block', marginBottom: '5px' }}>Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Enter Job Title"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>

        {/* Job Description */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="jobDescription" style={{ display: 'block', marginBottom: '5px' }}>Job Description</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            placeholder="Enter Job Description"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', height: '80px' }}
            required
          />
        </div>

        {/* Experience Level */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="experienceLevel" style={{ display: 'block', marginBottom: '5px' }}>Experience Level</label>
          <select
            id="experienceLevel"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          >
            <option value="">Select Experience Level</option>
            <option value="Entry Level">Entry Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>

        {/* Candidate */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="candidate" style={{ display: 'block', marginBottom: '5px' }}>Candidate</label>
          <input
            type="text"
            id="candidate"
            name="candidate"
            value={formData.candidate}
            onChange={handleChange}
            placeholder="Enter Candidate Name"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>

        {/* End Date */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="endDate" style={{ display: 'block', marginBottom: '5px' }}>End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', backgroundColor: '#0B66EF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default JobForm;
