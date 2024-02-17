import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseURL } from '../config';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import VendorDashboard from "../pages/VendorDashboard";
import ShopDashboard from "../pages/ShopDashboard";
import { useNavigate } from 'react-router-dom';
import UserContext from '../pages/UserContext';

const Button = ({ onClick, children }) => (
  <button style={{ padding: '8px', cursor: 'pointer' }} onClick={onClick}>
    {children}
  </button>
);

Modal.setAppElement('#root'); // Set the root element for accessibility



const LoginComponent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'Vendor',
  });

  const [showFailurePopup, setShowFailurePopup] = useState(false);

  const { setUserInfo } = React.useContext(UserContext);
  const { setShopInfo } = React.useContext(UserContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(`${baseURL}/shopper-signin`, formData);
      console.log(response);
  
      const userData = response.data;
  
      if (formData.role === 'Shop') {
        const userInfoResponse = await axios.get(`${baseURL}/user-info`, {
          params: {
            email: formData.email,
            role: formData.role.toLowerCase(),
          },
        });
  
        const userInfo = userInfoResponse.data;
        console.log('This is in login', userInfo);
        setShopInfo(userInfo); // Set shopInfo with userInfo if role is Shop
        navigateToDashboard(userInfo);
      } else if (formData.role === 'Vendor') {
        const userInfoResponse = await axios.get(`${baseURL}/user-info`, {
          params: {
            email: formData.email,
            role: formData.role.toLowerCase(),
          },
        });
  
        const userInfo = userInfoResponse.data;
        console.log('This is in login', userInfo);
        setUserInfo(userInfo); // Set userInfo if role is Vendor
        navigateToDashboard(userInfo);
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setShowFailurePopup(true);
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigateToDashboard = (userInfo) => {
    if (userInfo) {
      const roleSelected = formData.role.toLowerCase();
      if (roleSelected === 'shop' || roleSelected === 'vendor') {
        navigate(`/${roleSelected}-dashboard`);
      }
    }
  };

  const closeModal = () => {
    setShowFailurePopup(false);
  };

  return (
    <Container>
      <LeftColumn>
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/9440c43f26bc3084ea30e8d9eb778c09ad3efbf9f4502a0fb59fdf23645dea69?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=746" alt="Login Image" />
      </LeftColumn>
      <RightColumn>
        <Title>Login Account</Title>
        <Description>
          Lorem Ipsum is simply dummy text of the andtypesetting industry. Lorem
        </Description>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormRow>
          <Label htmlFor="role">Role</Label>
          <Select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="Vendor">Vendor</option>
            <option value="Shop">Shop</option>
          </Select>

          <Div27 type="submit">Login</Div27>
        </Form>
      </RightColumn>

      {/* Failure Modal */}
      <SmallModal
        isOpen={showFailurePopup}
        onRequestClose={closeModal}
        contentLabel="Failure Modal"
      >
        <ModalText>Login Failed</ModalText>
        <SmallButton onClick={closeModal}>
          OK
        </SmallButton>
      </SmallModal>
    </Container>
  );
};


const Container = styled.div`
  background-color: #fff;
  display: flex;
  gap: 10px;
`;

const LeftColumn = styled.div`
  width: 56%;
`;

const Select = styled.select`
  color: var(--darks-whites-500, #3b3f4e);
  letter-spacing: -0.36px;
  max-width: 382px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
`;

const RightColumn = styled.div`
  flex-grow: 1;
  padding: 0 20px;
`;

const Image = styled.img`
  aspect-ratio: 0.46;
  object-fit: contain;
  object-position: center;
  width: 746px;
  overflow: hidden;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.div`
  color: #000;
  align-self: center;
  white-space: nowrap;
  width: 439px;
  font: 700 40px Poppins, sans-serif;
  margin-top: 86px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Description = styled.div`
  color: #2b2525;
  align-self: stretch;
  margin-top: 23px;
  font: 400 20px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  align-self: stretch;
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
  max-width: 382px;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: var(--darks-whites-white, #fffefb);
  align-self: stretch;
  margin-top: 11px;
  padding: 23px 60px 23px 18px;
  font: 400 18px Poppins, sans-serif;
`;

const PasswordInput = styled(Input)`
  /* Add any additional styling for password input here */
`;

const Div27 = styled.button`
  color: #fff;
  text-align: center;
  white-space: nowrap;
  border-radius: 6px;
  width: 439px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 38px;
  justify-content: center;
  align-items: center;
  padding: 25px 60px;
  font: 500 16px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding: 0 20px;
  }
`;

const SmallModal = styled(Modal)`
  width: 300px;
  height: 150px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalText = styled.div`
  font-size: 16px;
  text-align: center;
  color: #000;
`;

const SmallButton = styled(Button)`
  color: #fff;
  text-align: center;
  white-space: nowrap;
  border-radius: 6px;
  background-color: var(--main-color, #e7b31a);
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  font: 500 16px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding: 0 20px;
  }
`;

export default LoginComponent;
