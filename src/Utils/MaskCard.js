import React from 'react';
import styled from 'styled-components';

function Card(props) {
  return (
    <CardContainer>
      <CardHeading>
        <Timestamp>2:20 Mint Ago</Timestamp>
        <JobCategory>Job Category</JobCategory>
        <JobTitle>Car Glasses Service</JobTitle>
        <CarDetails>2018,Toyota,2007</CarDetails>
      </CardHeading>
      <CardBody>
        <Description> 
          Lorem Ipsum is simply dummy text of the andtypesetting industry.Lorem
          Lorem Ipsum is simply dummy text of the
        </Description>
        <ImagesContainer>
          <CardImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f84c8d985192f1475b470de70130bf9e6dbfd57fab46be59b79d35027e0ca74d?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=400"
            alt="Card Image 1"
          />
          <CardImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f84c8d985192f1475b470de70130bf9e6dbfd57fab46be59b79d35027e0ca74d?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=400"
            alt="Card Image 2"
          />
          <CardImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f84c8d985192f1475b470de70130bf9e6dbfd57fab46be59b79d35027e0ca74d?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=400"
            alt="Card Image 3"
          />
          <CardImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f84c8d985192f1475b470de70130bf9e6dbfd57fab46be59b79d35027e0ca74d?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=400"
            alt="Card Image 4"
          />
        </ImagesContainer>
      </CardBody>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  margin-top: 7px;
  flex-grow: 1;
  flex-direction: column;
  align-items: end;
  width: 100%;
  padding: 14px 0 31px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const CardHeading = styled.div`
  display: flex;
  margin-right: 22px;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const Timestamp = styled.div`
  color: rgba(49, 48, 45, 0.8);
  font-feature-settings: "salt" on, "clig" off, "liga" off;
  align-self: end;
  white-space: nowrap;
  font: 400 12px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const JobCategory = styled.div`
  color: #000;
  align-self: start;
  white-space: nowrap;
  margin: 29px 0 0 17px;
  font: 600 24px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
    white-space: initial;
  }
`;

const JobTitle = styled.div`
  color: #000;
  align-self: stretch;
  margin-top: 24px;
  white-space: nowrap;
  font: 500 20px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const CarDetails = styled.div`
  color: rgba(0, 0, 0, 0.8);
  align-self: start;
  white-space: nowrap;
  margin: 14px 0 0 30px;
  font: 600 16px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
    white-space: initial;
  }
`;

const CardBody = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 46px;
  flex-direction: column;
  padding: 0 23px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Description = styled.div`
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const ImagesContainer = styled.div`
  display: flex;
  margin-top: 39px;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
`;

const CardImage = styled.img`
  aspect-ratio: 1.42;
  object-fit: contain;
  object-position: center;
  width: 156px;
  overflow: hidden;
  max-width: 100%;
`;

export default Card;
