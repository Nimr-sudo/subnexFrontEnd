import React, { useState , useEffect } from "react";
import { baseURL } from '../config';
import styled from "styled-components";
// Import axios for making HTTP requests
import axios from "axios";
import FileUploadButton from "../Utils/FileUpload";
import  UserContext from '../pages/UserContext'; // Import UserContext from appropriate path



const PostJobComponent = (props) => {
  const { shopInfo } = React.useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    category: '',
    make: '',
    description: '',
    shopName: '',
    shopAddress: '',
    model: '',
    year: '',
    biddingDeadline: '',
    jobPicture: null,
    shopId:  shopInfo.uid,
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    getLocation();
  }, []); // Run only once on component mount


  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prevFormData => ({
            ...prevFormData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  

  const handleFileSelect = (file) => {
    setFormData({
      ...formData,
      jobPicture: file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      const response = await axios.post(`${baseURL}/jobs/add`, form);
      console.log(response.data);
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <Div2>Post Job</Div2>
        <Div3 />
        <Div4>
          <Div5>
            <Label>Email</Label>
            <Input type="text" placeholder="Enter your email" name="email" onChange={handleChange} value={formData.email} />
          </Div5>
          <Div8>
            <Label>Shop name</Label>
            <Input type="text" placeholder="Enter shop name" name="shopName" onChange={handleChange} value={formData.shopName} />
          </Div8>
        </Div4>
        <Div11>
          <Div12>
            <Column>
              <Div13>
                <Label>Job Category</Label>
                <Select name="category" defaultValue="" onChange={handleChange} value={formData.category}>
                  <option value="" disabled>Select a category</option>
                  <option value="Paintless Dent Repair">Paintless Dent Repair</option>
                  <option value="Bedliners">Bedliners</option>
                  <option value="Glass Services">Glass Services</option>
                  <option value="Scans, Calibrations, and Diagnostics">Scans, Calibrations, and Diagnostics</option>
                  <option value="Wheel Reconditioning">Wheel Reconditioning</option>
                  <option value="Paint and Tape Stripes">Paint and Tape Stripes</option>
                  <option value="Automotive Detailing">Automotive Detailing</option>
                  <option value="Graphics, Wraps, and Paint Protection Films">Graphics, Wraps, and Paint Protection Films</option>
                  <option value="Window Tinting">Window Tinting</option>
                  <option value="Upholstery and Plastic Repair">Upholstery and Plastic Repair</option>
                  <option value="Bedliners">Completed</option>
                </Select>
                <Div22>
                  <Div28>Make</Div28>
                  <Input type="text" placeholder="Enter Make" name="make" onChange={handleChange} value={formData.make} />
                  <Div28>Job</Div28>
                  <Input2 type="text" placeholder="Enter Job Description" name="description" onChange={handleChange} value={formData.description} />
                </Div22>
              </Div13>
            </Column>
            <Column2>
              <Div17>
                <Label>Shop Address</Label>
                <Input type="text" placeholder="Enter shop address" name="shopAddress" onChange={handleChange} value={formData.shopAddress} />
              </Div17>
              <Div33>Model</Div33>
              <Input type="text" placeholder="Enter model" name="model" onChange={handleChange} value={formData.model} />
              <Div35>Year</Div35>
              <Input type="text" placeholder="Enter year" name="year" onChange={handleChange} value={formData.year} />
              <Div37>Bidding Deadline</Div37>
              <Input type="text" placeholder="Enter bidding deadline" name="biddingDeadline" onChange={handleChange} value={formData.biddingDeadline} />
              <Div39>Photo (optional)</Div39>
              <FileUploadButton onFileSelect={handleFileSelect} />
            </Column2>
          </Div12>
        </Div11>
        <Div46>
          <SubmitText type="submit">Submit</SubmitText>
        </Div46>
      </Div>
    </Form>
  );
};



const Form = styled.form`
  align-self: stretch;
`;
// Define the Input2 styled component
const Input2 = styled.input`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 501px; /* You can adjust this value as needed */
  height: 200px; /* Set the desired height for the Job Description field */
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-top: 11px;
  align-self: stretch;
`;

const Label = styled.label`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  margin-top: 15px;
  font: 400 14px Poppins, sans-serif;
`;

const Input = styled.input`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 501px; /* You can adjust this value as needed */
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
`;

const Select = styled.select`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 580px; /* You can adjust this value as needed */
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
`;


const Div = styled.div`
  box-shadow: 10px 40px 50px 0px rgba(229, 233, 246, 0.4);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 47px 67px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  color: #000;
  align-self: start;
  margin-left: 21px;
  white-space: nowrap;
  font: 600 32px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
    white-space: initial;
  }
`;

const Div3 = styled.div`
  background-color: #e7b31a;
  align-self: stretch;
  margin-top: 42px;
  height: 6px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div4 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 38px;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div5 = styled.div`
  justify-content: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div7 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 501px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  margin-top: 11px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div8 = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 11px;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div9 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div10 = styled.div`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 619px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  margin-top: 7px;
  justify-content: center;
  align-items: start;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Div11 = styled.div`
  align-self: stretch;
  margin-top: 29px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div12 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 46%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div13 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div14 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div15 = styled.div`
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  display: flex;
  margin-top: 7px;
  height: 60px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div16 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  justify-content: center;
  z-index: 1;
  margin-top: -35px;
  padding-bottom: 61px;
  font: 600 14px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 54%;
  margin-left: 110px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div17 = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;


const Div22 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div28 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  margin-top: 32px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;



const Div33 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  align-self: stretch;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div35 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  align-self: stretch;
  margin-top: 39px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;


const Div37 = styled.div`
  color: var(--temp-darks-lesser, #49485e);
  letter-spacing: -0.28px;
  align-self: stretch;
  margin-top: 31px;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;



const Div39 = styled.div`
  color: #49485e;
  align-self: stretch;
  margin-top: 27px;
  font: 400 16px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const UploadPhoto = styled.div`
  align-items: center;
  border-radius: 6px;
  border: 1px dashed #cacaca;
  background-color: #fff;
  align-self: start;
  display: flex;
  margin-top: 16px;
  width: 439px;
  max-width: 100%;
  flex-direction: column;
  padding: 16px 16px 50px;
`;

const Div41 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #f5f5f5;
  display: flex;
  aspect-ratio: 0.9772727272727273;
  flex-direction: column;
  width: 44px;
  height: 44px;
  padding: 0 10px;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Div42 = styled.div`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  margin-top: 12px;
  gap: 4px;
  padding: 0 80px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div43 = styled.div`
  color: var(--main-color, #e7b31a);
  white-space: nowrap;
  font: 500 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div44 = styled.div`
  color: #353535;
  white-space: nowrap;
  font: 400 14px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div45 = styled.div`
  align-self: stretch;
  color: #353535;
  text-align: center;
  margin: 4px 0 6px;
  font: 400 12px Hind, sans-serif;
`;


const Div46 = styled.div`
  border-radius: 16px; /* Updated border radius */
  background-color: var(--main-color, #e7b31a);
  align-self: center;
  display: flex;
  margin-top: 62px;
  width: 439px;
  max-width: 100%;
  height: 64px;
  flex-direction: column;
  cursor: pointer; /* Add cursor pointer to indicate it's clickable */
  justify-content: center; /* Center the content vertically */
  align-items: center; /* Center the content horizontally */
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

// ... (existing code)

const SubmitText = styled.button`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
`;



export default PostJobComponent