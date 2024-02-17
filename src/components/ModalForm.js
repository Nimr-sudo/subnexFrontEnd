import React from 'react';
import styled from 'styled-components';

const ModalForm = ({ payment, setPayment, bidDeadline, setBidDeadline, handleSubmit, handleClose }) => {
  return (
    <ModalBackground>
      <ModalContent>
        <h2>Enter Payment and Bid Deadline</h2>
        <InputContainer>
          <label htmlFor="payment">Payment:</label>
          <input type="text" id="payment" value={payment} onChange={(e) => setPayment(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="bidDeadline">Bid Deadline:</label>
          <input type="text" id="bidDeadline" value={bidDeadline} onChange={(e) => setBidDeadline(e.target.value)} />
        </InputContainer>
        <ButtonContainer>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </ButtonContainer>
      </ModalContent>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
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
  border-radius: 10px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled.button`
  background-color: #ccc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

export default ModalForm;
