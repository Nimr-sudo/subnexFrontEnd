import * as React from "react";
import styled from "styled-components";

function MyComponent(props) {
  return (
    <Div>
      <Div2>
        <Img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
        />
        <Div3>
          <Div4>
            <span style={{color: "rgba(240,244,245,1)"}}>
              Multiple vendors at your fingertips competing for your business
              with the best{" "}
            </span>
            <span style={{color: "rgba(231,179,26,1)"}}>
              Pricing and fastest completion time
            </span>
          </Div4>
          <Div5>
            <Div6>Vendors Login</Div6>
            <Div7>Shop Login</Div7>
          </Div5>
        </Div3>
      </Div2>
      <Div8>
        <Div9>
          <Column>
            <Div10>
              <Img2
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cf86b0f9439c0a8a4de8a767f6b3d0ad8740c064879d865c5a7776244d04f41?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
              />
              <Div11>Post Job</Div11>
              <Div12>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Div12>
            </Div10>
          </Column>
          <Column2>
            <Div13>
              <Img3
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e69b95367a635fa1c87581801b3e493f0b134d28735bb8bded743bca717a82d5?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
              />
              <Div14>Choose a Bid</Div14>
              <Div15>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Div15>
            </Div13>
          </Column2>
          <Column3>
            <Div16>
              <Img4
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b94836f70603c4af2cad23f7275134307f264b149be4c584b708d24fa5ee4edf?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
              />
              <Div17>Finalize Payement</Div17>
              <Div18>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Div18>
            </Div16>
          </Column3>
        </Div9>
      </Div8>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div2 = styled.div`
  disply: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 698px;
  width: 100%;
  justify-content: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div3 = styled.div`
  position: relative;
  background: linear-gradient(
    199deg,
    rgba(0, 0, 0, 0) 15.31%,
    rgba(0, 0, 0, 0.84) 67.37%
  );
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 50px 80px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div4 = styled.div`
  color: #e7b31a;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  margin-top: 124px;
  max-width: 914px;
  font: 600 40px/57px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div5 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 67px 0 151px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin: 40px 0;
  }
`;

const Div6 = styled.div`
  color: var(--white, #fff);
  white-space: nowrap;
  justify-content: center;
  border-radius: 111px;
  box-shadow: 0px 4px 47px 0px rgba(7, 128, 147, 0.16);
  background-color: var(--main-color, #e7b31a);
  flex-grow: 1;
  padding: 20px 47px;
  font: 700 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div7 = styled.div`
  color: var(--main-color, #e7b31a);
  white-space: nowrap;
  justify-content: center;
  border-radius: 111px;
  border: 1px solid #f0f4f5;
  flex-grow: 1;
  padding: 20px 60px;
  font: 700 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div8 = styled.div`
  align-self: center;
  margin-top: 97px;
  width: 100%;
  max-width: 1302px;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div9 = styled.div`
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
  width: 34%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div10 = styled.div`
  border-radius: 20px;
  box-shadow: 10px 40px 50px 0px rgba(229, 233, 246, 0.4);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 45px 50px 37px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 3.44;
  object-fit: contain;
  object-position: center;
  width: 268px;
  overflow: hidden;
  margin-top: 4px;
`;

const Div11 = styled.div`
  color: #000;
  align-self: stretch;
  margin-top: 53px;
  white-space: nowrap;
  font: 700 24px/56px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Div12 = styled.div`
  color: #7d7987;
  align-self: stretch;
  margin: 27px 0 12px;
  font: 300 16px/24px Inter, sans-serif;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 34%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div13 = styled.div`
  border-radius: 20px;
  box-shadow: 10px 40px 50px 0px rgba(229, 233, 246, 0.4);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 45px 50px 37px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Img3 = styled.img`
  aspect-ratio: 2.98;
  object-fit: contain;
  object-position: center;
  width: 268px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 4px;
`;

const Div14 = styled.div`
  color: #000;
  align-self: stretch;
  margin-top: 39px;
  white-space: nowrap;
  font: 700 24px/56px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div15 = styled.div`
  color: #7d7987;
  align-self: stretch;
  margin: 33px 0 6px;
  font: 300 16px/24px Inter, sans-serif;
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 32%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div16 = styled.div`
  border-radius: 20px;
  box-shadow: 10px 40px 50px 0px rgba(229, 233, 246, 0.4);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 45px 50px 37px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Img4 = styled.img`
  aspect-ratio: 2.98;
  object-fit: contain;
  object-position: center;
  width: 268px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 4px;
`;

const Div17 = styled.div`
  color: #000;
  align-self: stretch;
  margin-top: 39px;
  white-space: nowrap;
  font: 700 24px/56px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div18 = styled.div`
  color: #7d7987;
  align-self: stretch;
  margin: 27px 0 6px;
  font: 300 16px/24px Inter, sans-serif;
`;

export default MyComponent