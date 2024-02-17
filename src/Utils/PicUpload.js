import React, { useRef } from 'react';
import styled from 'styled-components';

const Div40 = styled.div`
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

const Input = styled.input`
  display: none;
`;

const PicUploadButton = ({ onPicSelect }) => {
  const fileInputRef = useRef(null);

  const handlePicButtonClick = () => {
    fileInputRef.current.click();
  };

  const handlePicChange = (event) => {
    const selectedPic = event.target.files[0];
    if (selectedPic) {
      // You can perform actions with the selected picture, such as uploading it
      // For now, let's just log the picture details
      console.log('Selected picture:', selectedPic);
      if (onPicSelect) {
        onPicSelect(selectedPic);
      }
    }
  };

  return (
    <Div40 onClick={handlePicButtonClick}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handlePicChange}
      />
      Click to Upload Pic
    </Div40>
  );
};

export default PicUploadButton;
