
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const FileUploadContainer = styled.div`
  align-items: center;
  border-radius: 6px;
  border: 1px dashed #cacaca;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 18px;
  flex-direction: column;
  padding: 16px 22px 50px 16px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const FileUploadPreview = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #f5f5f5;
  display: flex;
  width: 129px;
  max-width: 439px;
  flex-direction: column;
  padding: 10px 37px 10px 7px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const PreviewImage = styled.img`
  aspect-ratio: 3.54;
  object-fit: contain;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const FileUploadInfo = styled.div`
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  margin-top: 12px;
  gap: 4px;
  padding: 0 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const InfoText = styled.div`
  color: ${(props) => props.color || '#353535'};
  white-space: nowrap;
  font: ${(props) => props.font || '400 14px Poppins, sans-serif'};
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const FileUploadButton = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null); 

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);


    if (file) {
      setSelectedFile(file);

      if (onFileSelect) {
        onFileSelect(file);
      }
    }
  };

  return (
    <FileUploadContainer onClick={handleFileButtonClick}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <FileUploadPreview>
        {selectedFile ? (
          <PreviewImage
            loading="lazy"
            src={URL.createObjectURL(selectedFile)}
          />
        ) : (
          <PreviewImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad317b6ee6da5a8f6ea3cd7cf2b5056549ccf869c7c573ab084816305a8ba36d?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
          />
        )}
      </FileUploadPreview>
      <FileUploadInfo>
        <InfoText color="#e7b31a" font="500 14px Poppins, sans-serif">
          Click to Upload
        </InfoText>
        <InfoText color="#353535" font="400 14px Poppins, sans-serif">
          or drag and drop
        </InfoText>
      </FileUploadInfo>
      <InfoText color="#353535" font="400 12px Hind, sans-serif">
        (Max. File size: 25 MB)
      </InfoText>
    </FileUploadContainer>
  );
};

export default FileUploadButton;
