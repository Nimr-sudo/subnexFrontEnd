import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import  UserContext  from './UserContext'; // Import UserContext from appropriate path
import { baseURL } from '../config';


const Preferences = () => {
  const { userInfo } = useContext(UserContext); // Get userInfo from context
  const [notificationPreference, setNotificationPreference] = useState('');
  const [jobTypes, setJobTypes] = useState([]);
  const [distancePreference, setDistancePreference] = useState('');

  const handleNotificationChange = (event) => {
    setNotificationPreference(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    const selectedJobType = event.target.value;
    if (jobTypes.includes(selectedJobType)) {
      setJobTypes(jobTypes.filter((type) => type !== selectedJobType));
    } else {
      setJobTypes([...jobTypes, selectedJobType]);
    }
  };

  const handleDistanceChange = (event) => {
    setDistancePreference(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/vendors/preferences`, {
        vendorId: userInfo.uid,
        notifPref: notificationPreference,
        jobTypePref: jobTypes,
        distPref: distancePreference,
      });

      console.log(response.data);
      // Handle success response
    } catch (error) {
      console.error('Error submitting preferences:', error);
      // Handle error
    }
  };

  return (
    <PreferencesContainer>
      <form onSubmit={handleSubmit}>
        <SectionTitle>Notification Preferences</SectionTitle>
        <FormGroup>
          <Label>How would you like to be notified?</Label>
          <Select value={notificationPreference} onChange={handleNotificationChange}>
            <option value="">Select</option>
            <option value="text">Text</option>
            <option value="email">Email</option>
          </Select>
        </FormGroup>

        <SectionTitle>Job Type Preferences</SectionTitle>
        <FormGroup>
          <Label>Types of jobs you would like to be informed about:</Label>
          {[
            "Paintless Dent Repair",
            "Bedliners",
            "Glass Services",
            "Scans, Calibrations, and Diagnostics",
            "Wheel Reconditioning",
            "Paint and Tape Stripes",
            "Automotive Detailing",
            "Graphics, Wraps, and Paint Protection Films",
            "Window Tinting",
          ].map((jobType) => (
            <CheckboxLabel key={jobType}>
              <input
                type="checkbox"
                value={jobType}
                checked={jobTypes.includes(jobType)}
                onChange={handleJobTypeChange}
              />
              {jobType}
            </CheckboxLabel>
          ))}
        </FormGroup>

        <SectionTitle>Distance Preferences</SectionTitle>
        <FormGroup>
          <Label>Preferred distance for jobs (in kilometers):</Label>
          <Select value={distancePreference} onChange={handleDistanceChange}>
            <option value="">Select</option>
            <option value="5">5 km</option>
            <option value="10">10 km</option>
            <option value="15">15 km</option>
          </Select>
        </FormGroup>

        <button type="submit">Save Preferences</button>
      </form>
    </PreferencesContainer>
  );
};
const PreferencesContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #555;
  font-size: 1rem;

  input {
    margin-right: 8px;
  }
`;

export default Preferences;
