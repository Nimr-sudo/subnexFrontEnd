import * as React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <Div id="contact">
      <Img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4eb5c325894de7c91816017b0f00c578072e9938ccf23d1ba71f0d3c372ef5f3?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eb5c325894de7c91816017b0f00c578072e9938ccf23d1ba71f0d3c372ef5f3?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eb5c325894de7c91816017b0f00c578072e9938ccf23d1ba71f0d3c372ef5f3?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eb5c325894de7c91816017b0f00c578072e9938ccf23d1ba71f0d3c372ef5f3?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eb5c325894de7c91816017b0f00c578072e9938ccf23d1ba71f0d3c372ef5f3?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eb5c325894de7c91816017b0f00c578072e9938ccf23d1ba71f0d3c372ef5f3?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eb5c325894de7c91816017b0f00c578072e9938ccf23d1ba71f0d3c372ef5f3?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eb5c325894de7c91816017b0f00c578072e9938ccf23d1ba71f0d3c372ef5f3?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
      />
      <Div2>
        <Div3>
          <Column>
            <Div4>
              <Div5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Div5>
              <Div6>Social</Div6>
              <Div7>
                <Img2
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9566158512c5bbf17c58e91a06151acb578951e2a6fbc4b2bd2e316993ec1205?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
                />
                <Img3
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5805685a6d600838eeab90ebec2d97839f7ca39a49e9a2fb96e84cfecf0a4028?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
                />
                <Img4
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd117c325e97b46a898d79055d9809720a26192efbfb1d3ef98f2f5160636a53?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
                />
                <Img5
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e670412c08954dc279bfbd3323e7225f44a782225fa6efb4c5043dda5fb4e767?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
                />
                <Img6
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/89530c4f2e065a7f384609e42b319879e36f818b2cc6fdfec2a1fc02c019bf4f?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
                />
              </Div7>
            </Div4>
          </Column>
          <Column2>
            <Div8>
              <Div9>Contact</Div9>
              <Div10>
                <Img7
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/87df5af2d40c6e7113d3949c6f107c2a925dcb8ce800df168c50beab62382549?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
                />
                <Div11>johnson@gmail.com</Div11>
              </Div10>
              <Div12>
                <Img8
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f321677b7be9de4b651e6db23b2d23175d0e6b256e930ea4d3778b83089e6abe?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
                />
                <Div13>+1 743 3322 223</Div13>
              </Div12>
            </Div8>
          </Column2>
          <Column3>
            <Div14>
              <Div15>Subscribe to our newsletter</Div15>
              <Div16>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </Div16>
              <Div17>
                <Div18>Enter your email</Div18>
                <Div19>Subscribe</Div19>
              </Div17>
            </Div14>
          </Column3>
        </Div3>
      </Div2>
      <Div20 />
      <Div21>
        ShowTheOffer is a part of the ACS, LLC. Group Copyright © 2024. All
        rights reserved
        <br />
      </Div21>
    </Div>
  );
}

const Div = styled.div`
  align-items: center;
  background-color: rgba(248, 251, 252, 0.6);
  display: flex;
  flex-direction: column;
  padding: 40px 80px 0;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Img = styled.img`
  aspect-ratio: 3.13;
  object-fit: contain;
  object-position: center;
  width: 200px;
  overflow: hidden;
  align-self: start;
  margin-left: 49px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Div2 = styled.div`
  align-self: left;
  margin-top: 40px;
  width: 100%;
  max-width: 1180px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

// const Div3 = styled.div`
//   gap: 20px;
//   display: flex;
//   @media (max-width: 991px) {
//     flex-direction: column;
//     align-items: stretch;
//     gap: 0px;
//   }
// `;

// const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   line-height: normal;
//   width: 37%;
//   margin-left: 0px;
//   @media (max-width: 991px) {
//     width: 100%;
//   }
// `;

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div5 = styled.div`
  color: #6f7680;
  font-variant-numeric: lining-nums proportional-nums;
  font: 400 14px/18px Poppins, sans-serif;
`;

const Div6 = styled.div`
  color: var(--additional-colors-headings, #243141);
  margin-top: 32px;
  white-space: nowrap;
  font: 500 18px/30px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div7 = styled.div`
  display: flex;
  margin-top: 18px;
  padding-right: 80px;
  gap: 16px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
`;

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
`;

const Img5 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
`;

const Img6 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  overflow: hidden;
  max-width: 100%;
`;

// const Column2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   line-height: normal;
//   width: 24%;
//   margin-left: 20px;
//   @media (max-width: 991px) {
//     width: 100%;
//   }
// `;

const Div8 = styled.div`
  display: flex;
  margin-top: 9px;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div9 = styled.div`
  color: var(--additional-colors-headings, #243141);
  white-space: nowrap;
  font: 500 18px/30px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div10 = styled.div`
  align-items: center;
  display: flex;
  margin-top: 18px;
  justify-content: space-between;
  gap: 16px;
`;

const Img7 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
`;

const Div11 = styled.div`
  color: #6f7680;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 18px/30px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div12 = styled.div`
  align-items: center;
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
  gap: 16px;
`;

const Img8 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
`;

const Div13 = styled.div`
  color: #6f7680;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 18px/30px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

// const Column3 = styled.div`
//   display: flex;
//   flex-direction: column;
//   line-height: normal;
//   width: 39%;
//   margin-left: 20px;
//   @media (max-width: 991px) {
//     width: 100%;
//   }
// `;

const Div14 = styled.div`
  justify-content: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div15 = styled.div`
  color: #243141;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  font: 600 14px/20px Inter, sans-serif;
`;

const Div16 = styled.div`
  color: #6f7680;
  margin-top: 16px;
  font: 400 16px/24px Inter, sans-serif;
`;

const Div17 = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
  gap: 12px;
`;

const Div18 = styled.div`
  color: var(--gray-500, #6b7280);
  white-space: nowrap;
  align-items: start;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #d1d5db);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  background-color: var(--white, #fff);
  flex-grow: 1;
  justify-content: center;
  padding: 9px 60px 9px 13px;
  font: 400 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding-right: 20px;
  }
`;

const Div19 = styled.div`
  color: var(--white, #fff);
  white-space: nowrap;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  background-color: #fccd3d;
  padding: 9px 17px;
  font: 500 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div20 = styled.div`
  align-self: center;
  background-color: rgba(14, 14, 14, 0.1);
  display: flex;
  margin-top: 40px;
  width: 1180px;
  max-width: 100%;
  height: 1px;
  flex-direction: column;
`;

const Div21 = styled.div`
  color: var(--dark-white-dark, #0e0e0e);
  text-align: center;
  align-self: center;
  margin-top: 32px;
  width: 1180px;
  max-width: 1180px;
  font: 400 16px/24px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
// ... (existing code)

const Div3 = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row; /* Updated to row */
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
  width: 37%;
  margin-left: auto; /* Updated to move to the right */
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: auto; /* Updated to move to the right */
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 39%;
  margin-left: auto; /* Updated to move to the right */
  @media (max-width: 991px) {
    width: 100%;
  }
`;

// ... (existing code)

export default Footer