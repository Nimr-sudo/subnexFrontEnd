import * as React from "react";
import styled from "styled-components";

function ConnectVendors(props) {
  return (
    <Div>
      <Div2>Connect With More Vendors In less time</Div2>
      <Div3>With Zero Phone Calls</Div3>
      <Div4>
        <Div5>
          <Div6>
            1-Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Div6>{" "}
          <Div7>
            1-Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Div7>
          <Div8>
            1-Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Div8>{" "}
          <Div9>
            1-Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Div9>
          <Div10>
            1-Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Div10>{" "}
          <Div11>
            1-Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Div11>
        </Div5>
        <Img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08aa49c355d42b061ac9b35dc37f14a98dd06c8b9e4fe0ed277857f722af6f85?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
        />
      </Div4>
    </Div>
  );
}

const Div = styled.div`
  background-color: #fff;
  display: flex;
  padding-top: 24px;
  flex-direction: column;
`;

const Div2 = styled.div`
  color: #101828;
  text-align: center;
  letter-spacing: -0.8px;
  align-self: center;
  white-space: nowrap;
  font: 600 40px/49px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const Div3 = styled.div`
  color: #fccd3d;
  text-align: center;
  letter-spacing: -0.4px;
  align-self: center;
  margin-top: 17px;
  max-width: 768px;
  font: 600 20px/49px Inter, sans-serif;
`;

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  margin: 17px auto; /* Center the content vertically and add margin */
  max-width: 768px;
  padding: 0 46px 0 70px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div5 = styled.div`
  border-radius: 10px;
  background-color: #fccd3d;
  display: flex;
  flex-direction: column;
  padding: 50px 56px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div6 = styled.div`
  color: #1c1c1c;
  text-align: center;
  margin-top: 22px;
  white-space: nowrap;
  font: 400 16px/16px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const Div7 = styled.div`
  color: #1c1c1c;
  text-align: center;
  margin-top: 18px;
  white-space: nowrap;
  font: 400 16px/16px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const Div8 = styled.div`
  color: #1c1c1c;
  text-align: center;
  margin-top: 14px;
  white-space: nowrap;
  font: 400 16px/16px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const Div9 = styled.div`
  color: #1c1c1c;
  text-align: center;
  margin-top: 14px;
  white-space: nowrap;
  font: 400 16px/16px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const Div10 = styled.div`
  color: #1c1c1c;
  text-align: center;
  margin-top: 14px;
  white-space: nowrap;
  font: 400 16px/16px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const Div11 = styled.div`
  color: #1c1c1c;
  text-align: center;
  white-space: nowrap;
  margin: 14px 0 46px;
  font: 400 16px/16px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 40px;
    white-space: initial;
  }
`;

const Img = styled.img`
  aspect-ratio: 26.4;
  object-fit: contain;
  object-position: center;
  width: 132px;
  overflow: hidden;
  align-self: end;
  margin-top: 10px;
  max-width: 100%;
`;

export default ConnectVendors