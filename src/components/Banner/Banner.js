import * as React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom


function Banner(props) {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Div id="banner">
      <Img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef726a401113465f0bfa4164337bc5141bfd0446e2bdce3d1610801d63795496?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
      />
      <Div2>
        <Div3>
          <span style={{ color: "rgba(240,244,245,1)" }}>
            Multiple vendors at your fingertips competing for your business with
            the best{" "}
          </span>
          <span style={{ color: "rgba(231,179,26,1)" }}>
            Pricing and fastest completion time
          </span>
        </Div3>
        <Div4>
          <Div5 onClick={() => navigate("/vendors-signup")}>Vendors SignUp</Div5>
          <Div6 onClick={() => navigate("/repair-signup")}>Shop SignUp</Div6>
        </Div4>
      </Div2>
    </Div>
  );
}

// ... (styles remain the same)

const Div = styled.div`
  disply: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 698px;
  justify-content: center;
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div2 = styled.div`
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
  margin-bottom: -3px;
  padding: 50px 80px 73px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div3 = styled.div`
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

const Div4 = styled.div`
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
// ... (your existing imports and components)

const bounceAnimation = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

const riseAnimation = `
  @keyframes rise {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;

const hoverEffect = `
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Div5 = styled.button`
  ${hoverEffect}
  ${bounceAnimation}
  color: var(--white, #fff);
  white-space: nowrap;
  justify-content: center;
  border-radius: 111px;
  box-shadow: 0px 4px 47px 0px rgba(7, 128, 147, 0.16);
  background-color: var(--main-color, #e7b31a);
  flex-grow: 1;
  padding: 20px 47px;
  font: 700 16px/24px Inter, sans-serif;
  animation: bounce 1s infinite;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div6 = styled.button`
  ${hoverEffect}
  ${riseAnimation}
  color: var(--main-color, #e7b31a);
  white-space: nowrap;
  justify-content: center;
  border-radius: 111px;
  border: 1px solid #f0f4f5;
  flex-grow: 1;
  padding: 20px 60px;
  font: 700 16px/24px Inter, sans-serif;
  background-color: transparent;
  animation: rise 0.3s;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

export default Banner;
