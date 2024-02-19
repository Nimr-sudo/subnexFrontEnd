import React, { useState } from 'react';
import styled from 'styled-components';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

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

const StripePaymentForm = () => {
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

      setPaymentComplete(true);
    } catch (error) {
      setError(error.message);
    }

    setIsProcessing(false);
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
          <CancelButton type="button">Cancel</CancelButton>
        </>
      )}
    </FormContainer>
  );
};

export default StripePaymentForm;
