import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function ChooseOpts(props) {
  return (
    <Div id="about">
      <Div2>
        <Column>

        <Card>
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cf86b0f9439c0a8a4de8a767f6b3d0ad8740c064879d865c5a7776244d04f41?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
            />
            <CardHeading>Post Job</CardHeading>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </CardText>
          </Card>
        </Column>
        <Column2>
        <Card>
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e69b95367a635fa1c87581801b3e493f0b134d28735bb8bded743bca717a82d5?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
            />
            <CardHeading>Choose a Bid</CardHeading>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </CardText>
          </Card>
        </Column2>
        <Column3>
          <Card>
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b94836f70603c4af2cad23f7275134307f264b149be4c584b708d24fa5ee4edf?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
            />
            <CardHeading>Finalize Payement</CardHeading>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </CardText>
          </Card>
        </Column3>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  margin-left: 80px;
  padding: 25px 60px 14px 0;
`;

const Div2 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 34%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Card = styled.div`
  border-radius: 30px; /* Increased border-radius */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Adjusted box shadow */
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 350px;
  padding: 30px 25px 30px 20px; /* Added padding */
  margin: 70px; /* Added margin */
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 20px; /* Adjusted padding */
  }
`;

const Img = styled.img`
  aspect-ratio: 3.44;
  object-fit: contain;
  object-position: left;
  width: 100%;
  overflow: hidden;
  margin-top: 4px;
  padding: 0 20px; /* Added padding */
`;

const CardHeading = styled.div`
  color: #000;
  align-self: stretch;
  margin-top: 20px; /* Adjusted margin */
  white-space: nowrap;
  font: 700 24px/56px Poppins, sans-serif;
  padding: 0 20px; /* Added padding */
  @media (max-width: 991px) {
    margin-top: 15px; /* Adjusted margin for mobile view */
    white-space: initial;
  }
`;

const CardText = styled.div`
  color: #7d7987;
  align-self: stretch;
  margin: 15px 0 12px; /* Adjusted margin */
  font: 300 16px/24px Inter, sans-serif;
  padding: 0 20px; /* Added padding */
`;


const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 34%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 32%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;



export default ChooseOpts