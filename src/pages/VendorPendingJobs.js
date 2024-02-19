import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from '../config';
import UserContext from '../pages/UserContext';
import { Elements } from '@stripe/react-stripe-js'; // Import Elements
import { loadStripe } from '@stripe/stripe-js'; // Import loadStripe

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_live_51OkAZWGBaU70AJWx0ZFDataV4MOE45vKHNklqFQ2KSzU4czwTcozUIW1N4fn4CuYnn0o8Oh200fdW0GmOL2B9gCX00Ka92qtcF'); // Replace 'your_stripe_public_key' with your actual Stripe public key

// Component
const StripePaymentForm = ({ job, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return;
    }
  
    setIsProcessing(true);
  
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          name: name,
          address: {
            line1: address,
          },
        },
      });
  
      if (error) {
        throw error;
      }
  
      // Send the paymentMethod.id and additional data to your server to process the payment
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          name: name,
          address: address,
          role: role,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to process payment on server');
      }
  
      // Call API to delete job
      const deleteResponse = await axios.delete(`${baseURL}/vendor-pending/delete/${job.id}`);
      if (deleteResponse.status === 200) {
        // Call API to add job to completed
        const addResponse = await axios.post(`${baseURL}/vendor-completed/add`, {
          jobId: job.id,
          category: job.category,
          description: job.description,
          vendorid: job.vendorid,
          shopId: job.shopId,
          payment: job.payment,
          // Add any other job data here
        });
        if (addResponse.status === 200) {
          setPaymentComplete(true);
        }
      }
    } catch (error) {
      setError(error.message);
    }
  
    setIsProcessing(false);
  };
  

  const handleCancel = () => {
    onClose(); // Close the modal
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Ribbon>Payment Details</Ribbon>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Address</Label>
        <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>Role</Label>
        <Select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select role</option>
          <option value="vendor">Vendor</option>
          <option value="shopper">Shopper</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>Card details</Label>
        <CardInputContainer>
          <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
        </CardInputContainer>
      </FormGroup>
      {error && <ErrorText>{error}</ErrorText>}
      {paymentComplete ? (
        <SuccessText>Payment successful!</SuccessText>
      ) : (
        <>
          <PayButton type="submit" disabled={!stripe || isProcessing}>
            {isProcessing ? 'Processing...' : 'Pay'}
          </PayButton>
          <CancelButton type="button" onClick={handleCancel}>Cancel</CancelButton>
        </>
      )}
    </FormContainer>
  );
};


const VendorPendingJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // State to store the selected job
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const { userInfo } = React.useContext(UserContext);

  useEffect(() => {
    if (userInfo && userInfo.uid) {
      axios.get(`${baseURL}/vendor-pending/${userInfo.uid}`)
        .then((response) => setJobs(response.data))
        .catch((error) => console.error("Error fetching pending jobs:", error));
    }
  }, [userInfo]);

  const handleCompleteClick = (job) => {
    setSelectedJob(job); // Set the selected job
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div>
      {/* Render jobs */}
      {jobs.map((job) => (
        <StyledCard key={job.id}>
          <CardHeading>{formatShopName(job.category)}</CardHeading>
          <CardText>{formatDescription(job.description)}</CardText>
          <CardButton onClick={() => handleCompleteClick(job)}>Complete</CardButton>
        </StyledCard>
      ))}

      {/* Modal for payment form */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>Close</CloseButton>
            {/* Wrap StripePaymentForm with Elements */}
            <Elements stripe={stripePromise}>
              <StripePaymentForm job={selectedJob} onClose={() => setIsModalOpen(false)} />
            </Elements>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};


// Function to format description as specified
// Function to format description as specified
function formatDescription(description) {
  if (!description) {
    return ''; // Handle the case when description is undefined
  }

  if (description.length > 20) {
    const truncated = description.substring(0, 20);
    const remaining = description.substring(20);
    return (
      <>
        {truncated}
        <br />
        {remaining}
      </>
    );
  }
  return description;
}

function formatShopName(shopName) {
  if (!shopName) {
    return ''; // Handle the case when description is undefined
  }
  if (shopName.length > 5) {
    return (
      <>
        {shopName}
        <br />
      </>
    );
  }
  return shopName;
}


const FormContainer = styled.form`
  width: 900px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Ribbon = styled.div`
  width: 100%;
  background-color: #ffcc3d;
  color: #fff;
  font-weight: bold;
  padding: 10px 0;
  text-align: center;
  position: relative;
  margin-bottom: 20px;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #ffcc3d;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorText = styled.div`
  color: red;
`;

const SuccessText = styled.div`
  color: green;
`;

const PayButton = styled.button`
  background-color: #ffcc3d;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;

  &:hover {
    background-color: #e6b800;
  }
`;

const CancelButton = styled.button`
  background-color: #fff;
  color: #ffcc3d;
  padding: 12px 20px;
  border: 1px solid #ffcc3d;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: calc(50% - 5px);

  &:hover {
    background-color: #ffcc3d;
    color: #fff;
  }
`;

const CardInputContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
`;


// Define styled components for modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Div = styled.div`
  flex-direction: column;
  gap: 10px;
`;

const Div2 = styled.div`
  width: 90%;
  padding: 0 10px;
  @media (max-width: 900px) {
    max-width: 90%;
  }
`;

const Div3 = styled.div`
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 35%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
const StyledCard = styled.div`
  width: 443px; // Adjust the width based on your styling needs
  box-sizing: border-box;
  margin-bottom: 20px;
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px 24px 16px 16px;
  border-radius: 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
`;

const CardHeading = styled.div`
  align-self: stretch;
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const CardText = styled.div`
  align-self: stretch;
  color: #474747;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
`;

const CardButton = styled.div`
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 10px;
  aspect-ratio: auto;
  padding: 12px 12px;
  font: 500 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const SeeMoreButton = styled(Link)`
  color: var(--white, #fff);
  white-space: nowrap;
  border-radius: 111px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 41px;
  width: 207px;
  max-width: 100%;
  padding: 20px 60px;
  font: 700 16px/24px Poppins, sans-serif;
  text-align: center; /* Center text horizontally */
  text-decoration: none; /* Remove default link underline */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px 0 28px;
  }

  &:hover {
    background-color: #c19315; /* Change the color as needed */
  }
`;




export default VendorPendingJobs