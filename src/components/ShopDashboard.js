import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { baseURL } from '../config';
import  UserContext from '../pages/UserContext'; // Import UserContext from appropriate path

function ShopDashboardComponent() {
  const [submittedBids, setSubmittedBids] = useState([]);
  const { shopInfo } = React.useContext(UserContext); // Access userinfo from context
  console.log('shop-dash', shopInfo)

  useEffect(() => {
    axios
      .get(`${baseURL}/bids/shop/${shopInfo.uid}`)
      .then((response) => setSubmittedBids(response.data.bids))
      .catch((error) => console.error('Error fetching submitted bids:', error));
  }, []);

  const handleAcceptClick = (bid) => {
    axios
      .post(`${baseURL}/vendor-pending/add`, {
        jobId: bid.id,
        category: bid.category,
        description: bid.description,
        vendorid: bid.userId,
        shopId: shopInfo.uid, // Add userinfo.uid to the bid data
        payment: bid.payment,
      })
      .then((response) => {
        console.log(response.data);
        // Add call to shop-pending/add
        axios
          .post(`${baseURL}/shop-pending/add`, {
            jobId: bid.id,
            category: bid.category,
            description: bid.description,
            vendorid: bid.userId,
            shopId: shopInfo.uid,
            payment: bid.payment,

          })
          .then((response) => {
            console.log(response.data , 'shp pending added');
            axios
              .delete(`${baseURL}/vendor-submitted-bids/${bid.id}`)
              .then((response) => {
                console.log(response.data);
                axios
                  .get(`${baseURL}/bids/all`)
                  .then((response) => setSubmittedBids(response.data.bids))
                  .catch((error) => console.error('Error fetching submitted bids:', error));
              })
              .catch((error) => console.error('Error deleting bid:', error));
          })
          .catch((error) => console.error('Error adding job to ShopPending:', error));
      })
      .catch((error) => console.error('Error adding job to VendorPending:', error));
  };



  // Function to format description as specified
  function formatDescription(description) {
    if (!description) {
      return ''; // Handle the case when description is undefined
    }

    if (description.length > 20) {
      const truncated = description.substring(0, 20);
      const remaining = description.substring(20);
      return (
        <>
          {truncated}
          <br />
          {remaining}
        </>
      );
    }
    return description;
  }

  // Function to format shop name as specified
  function formatShopName(shopName) {
    if (!shopName) {
      return ''; // Handle the case when description is undefined
    }
    if (shopName.length > 5) {
      return (
        <>
          {shopName}
          <br />
        </>
      );
    }
    return shopName;
  }

  // Chunking submitted bids into rows
  const chunkedJobs = submittedBids.reduce((acc, bid, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(bid);
    return acc;
  }, []);

  return (
    <Div>
      <Div2>
        {chunkedJobs.map((row, rowIndex) => (
          <Div3 key={rowIndex}>
            {row.map((bid) => (
              <StyledCard key={bid.id}>
                <CardHeading>{formatShopName(bid.shopName)}</CardHeading>
                <CardText>{formatDescription(bid.description)}</CardText>
                <CardButton onClick={() => handleAcceptClick(bid)}>Accept</CardButton>
              </StyledCard>
            ))}
          </Div3>
        ))}
      </Div2>
      <SeeMoreButton>See more</SeeMoreButton>
    </Div>
  );
}

const Div = styled.div`
  flex-direction: column;
  gap: 10px;
`;

const Div2 = styled.div`
  width: 90%;
  padding: 0 10px;
  @media (max-width: 900px) {
    max-width: 90%;
  }
`;

const Div3 = styled.div`
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledCard = styled.div`
  width: 443px;
  box-sizing: border-box;
  margin-bottom: 20px;
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px 24px 16px 16px;
  border-radius: 20px;
`;

const CardHeading = styled.div`
  align-self: stretch;
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const CardText = styled.div`
  align-self: stretch;
  color: #474747;
  margin-top: 16px;
  font: 400 16px Poppins, sans-serif;
`;

const CardButton = styled.div`
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 10px;
  aspect-ratio: auto;
  padding: 12px 12px;
  font: 500 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SeeMoreButton = styled(Link)`
  color: var(--white, #fff);
  white-space: nowrap;
  border-radius: 111px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 41px;
  width: 207px;
  max-width: 100%;
  padding: 20px 60px;
  font: 700 16px/24px Poppins, sans-serif;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px 0 28px;
  }

  &:hover {
    background-color: #c19315;
  }
`;

export default ShopDashboardComponent;
