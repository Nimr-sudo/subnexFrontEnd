import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';  // Import axios for API calls
import { baseURL } from '../config';  // Assuming baseURL is correctly imported
import UserContext  from '../pages/UserContext'; // Import UserContext from appropriate path


const BidModal = ({ isOpen, onClose, onOkay }) => {
  const [payment, setPayment] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmission = () => {
    onOkay(payment, deadline);
    onClose();
  };

  return (
    <BidModalWrapper isOpen={isOpen}>
      <BidModalContent>
        <BidInfoRibbon>Bid Info</BidInfoRibbon>
        <div>Offered Bid: <input value={payment} onChange={(e) => setPayment(e.target.value)} /></div>
        <div>Bid Deadline: <input value={deadline} onChange={(e) => setDeadline(e.target.value)} /></div>
        <ButtonContainer>
          <button onClick={handleSubmission}>Okay</button>
          <div style={{ width: "10px" }}></div>
          <button onClick={onClose}>Cancel</button>
        </ButtonContainer>
      </BidModalContent>
    </BidModalWrapper>
  );
};

const VendorDashboardComponent = () => {
  const [jobs, setJobs] = useState([]);
  const [submittedBids, setSubmittedBids] = useState([]);
  const { userInfo } = React.useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [vendorPreferences, setVendorPreferences] = useState(null); // Define vendorPreferences state

  useEffect(() => {
    axios.get(`${baseURL}/jobs/all`)
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching all jobs:", error));
  
    if (userInfo?.uid) {
      axios.get(`${baseURL}/bids/vendor/${userInfo.uid}`)
        .then((response) => setSubmittedBids(response.data.bids))
        .catch((error) => console.error("Error fetching submitted bids:", error));

      axios.get(`${baseURL}/vendors/preferences/${userInfo.uid}`)
        .then((response) => {
          console.log('Vendor preferences:', response.data);
          setVendorPreferences(response.data); // Set vendor preferences
        })
        .catch((error) => console.error('Error fetching vendor preferences:', error));
    }
  }, [userInfo]);


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  // Print latitude and longitude
  useEffect(() => {
    console.log('Latitude:', userLocation?.latitude); // Use optional chaining to handle null userLocation
    console.log('Longitude:', userLocation?.longitude); // Use optional chaining to handle null userLocation
  }, [userLocation]);

  // Filter jobs based on vendor preferences and user location
  useEffect(() => {
    if (jobs.length > 0 && vendorPreferences && userLocation) {
      const filteredJobs = jobs.filter(job => {
        // Calculate distance between job location and user location
        const distance = calculateDistance(
          job.latitude,
          job.longitude,
          userLocation.latitude,
          userLocation.longitude
        );
        // Check if distance is within vendor's preference
        const isWithinDistance = distance <= parseInt(vendorPreferences.distPref);

        // Check if job category is in vendor's jobTypePref
        const isJobTypeMatch = vendorPreferences.jobTypePref.includes(job.category);

        return isWithinDistance && isJobTypeMatch;
      });
      setJobs(filteredJobs); // Update filtered jobs
    }
  }, [jobs, vendorPreferences, userLocation]);

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371; // Earth's radius in kilometers
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c; // Distance in kilometers

    return distance;
  }

  function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  
  const handleSubmitBid = async (payment, deadline) => {
    try {
      if (!selectedJob) {
        console.error('No job selected');
        return;
      }

      await axios.delete(`${baseURL}/jobs/delete/${selectedJob.id}`);

      await axios.post(`${baseURL}/vendor/submit-bid`, {
        jobId: selectedJob.id,
        shopId: selectedJob.shopId,
        shopName: selectedJob.shopName,
        category: selectedJob.category,
        description: selectedJob.description,
        date: new Date().toISOString(),
        vendorId: userInfo.uid,
        payment,
        deadline,
      });

      console.log('Bid submitted successfully');
      setJobs(jobs.filter(job => job.id !== selectedJob.id));
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error submitting bid:', error);
    }
  };


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const numberOfSlides = Math.ceil(jobs.length / 3);

  return (
    <div>
      <Slider {...settings}>
        {[...Array(numberOfSlides)].map((_, slideIndex) => (
          <div key={slideIndex}>
            <RowContainer>
              {jobs.slice(slideIndex * 3, slideIndex * 3 + 3).map((job, cardIndex) => (
                <CardContainer key={cardIndex}>
                  <Card>
                    <CardUpper>
                      <Time>{job.biddingDeadline}</Time>
                      <Category>{job.category}</Category>
                      <Service>{job.shopAddress}</Service>
                      <Make>{job.make}</Make>
                    </CardUpper>
                    <CardLower>
                      <DescHeading>Description</DescHeading>
                      <Desc>{formatDescription(job.description)}</Desc>
                      <ImagesContainer>
                        {[100, 200, 400, 800].map((width) => (
                          <Img
                            key={width}
                            loading="lazy"
                            srcSet={`${job.jobPicture}?apiKey=9a669d50f53c42b584b65aa6b91b08d5&width=${width} ${width}w`}
                          />
                        ))}
                      </ImagesContainer>
                      <BtnArea>
                        <SbtBtnContainer>
                          <SbtBtn onClick={() => { setSelectedJob(job); setIsModalOpen(true); }}>Submit Bid</SbtBtn>
                        </SbtBtnContainer>
                        <InfoBtnContainer>
                          <InfoBtn>More Info</InfoBtn>
                        </InfoBtnContainer>
                      </BtnArea>
                    </CardLower>
                  </Card>
                </CardContainer>
              ))}
            </RowContainer>
          </div>
        ))}
      </Slider>
      <SeeBtn>See more</SeeBtn>
      <BidArea>
        <Div49>
          <Space />
          <BidsHeading>
            <span style={{color:"rgba(255,193,3,1)"}}>Submitted Bids</span>
            <span style={{color:"rgba(55,53,44,1)"}}> ({submittedBids.length})</span>
          </BidsHeading>
        </Div49>
        {submittedBids.map((bid, index) => (
          <Div52 key={index}>
            <BidTime>
              Initiated {extractDate(bid.date).toLocaleString()}
              <br />
              {calculateDaysPassed(extractDate(bid.date))} days ago
            </BidTime>
            <BidService>{bid.category}</BidService>
            <AnotherSpace>
              <Column>
                <Img12
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9541edeaaeb7411c29b47b8494f3fb4ad5fa8fc395c1121d88e1b3b5feb4bee2?apiKey=9a669d50f53c42b584b65aa6b91b08d5&"
                />
                <Viewed>Viewed by client</Viewed>
              </Column>
            </AnotherSpace>
          </Div52>
        ))}
      </BidArea>
       
      <SeeBtn>See more</SeeBtn>
      <BidModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onOkay={handleSubmitBid} />

    </div>
  );
};

function extractDate(dateObject){
  return new Date(dateObject.seconds * 1000 + dateObject.nanoseconds / 1000000);
};

function calculateDaysPassed(bidDate){
  const currentDate = new Date();
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((currentDate.getTime() - bidDate.getTime()) / millisecondsPerDay);
};

function formatDescription(description) {
  if (!description) {
    return '';
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


const BidModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const BidModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  position: relative;
`;

const BidInfoRibbon = styled.div`
  position: absolute;
  top: -25px;
  left: 10px;
  background-color: #ffd700;
  padding: 5px 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Adjust as needed */
  margin-bottom: 20px; /* Adjust margin between rows */
`;

const CardContainer = styled.div`
  flex: 1;
  border: 1px solid transparent;
  padding: 20px;
  margin: 0 10px; /* Adjust margin between cards */
  max-width: calc(33.33% - 20px); /* Adjust card width based on desired number of cards per row */
  box-sizing: border-box;
`;

const CardUpper = styled.div`
  display: grid;
  text-align: center;  // Center the content
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-right: 22px;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const Time = styled.div`
  color: rgba(49, 48, 45, 0.8);
  font-feature-settings: "salt" on, "clig" off, "liga" off;
  white-space: nowrap;
  font: 400 12px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Category = styled.div`
  color: #000;
  white-space: nowrap;
  font: 600 24px Poppins, sans-serif;
`;

const Service = styled.div`
  color: #000;
  white-space: nowrap;
  font: 500 20px Poppins, sans-serif;
`;

const Make = styled.div`
  color: rgba(0, 0, 0, 0.8);
  white-space: nowrap;
  font: 200 16px Poppins, sans-serif;
`;

// ... (rest of the components)


const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 10px;  // Adjust margin as needed
  line-height: normal;
  width: 36%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Card = styled.div`
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  height:705px
  margin-top: 7px;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 14px 0 31px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

// Existing styles...



// ... (rest of the components)


// ... (rest of the components)

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); // Adjust the minmax values as needed
  gap: 20px;
  padding: 0 1px;
`;



const CardLower = styled.div`
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

const DescHeading = styled.div`
  color: #181818;
  font: 600 24px/32px Inter, sans-serif;
`;

const Desc = styled.div`
  color: #474747;
  margin-top: 24px;
  font: 400 16px Poppins, sans-serif;
`;

// const ImagesContainer = styled.div`
//   display: flex;
//   margin-top: 39px;
//   justify-content: space-between;
//   gap: 20px;
//   padding: 0 1px;
// `;

const Img = styled.img`
  aspect-ratio: 1.42;
  object-fit: contain;
  object-position: center;
  width: 156px;
  overflow: hidden;
  max-width: 100%;
`;

const BtnArea = styled.div`
  display: flex;
  margin-top: 14px;
  justify-content: space-between;
  gap: 20px;
`;

const SbtBtnContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
`;



const SbtBtn = styled.div`
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 45px;
  padding: 12px 24px;
  font: 500 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const InfoBtnContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
`;


const InfoBtn = styled.div`
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  background-color: var(--main-color, #e7b31a);
  margin-top: 47px;
  padding: 12px 25px;
  font: 500 16px/24px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 36%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;


const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 28%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;


const Div47 = styled.div`
  color: var(--white, #fff);
  white-space: nowrap;
  justify-content: center;
  align-items: start;
  border-radius: 111px;
  background-color: var(--main-color, #e7b31a);
  align-self: center;
  margin-top: 109px;
  width: 207px;
  max-width: 100%;
  padding: 20px 60px;
  font: 700 16px/24px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const BidArea = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 59px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  padding: 0 59px 0 11px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
    margin-top: 40px;
  }
`;

const SubmittedBids = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const Space = styled.div`
  background-color: #fccd3d;
  display: flex;
  width: 75px;
  height: 4px;
  flex-direction: column;
  margin: auto 0;
`;

const BidsHeading = styled.div`
  color: #37352c;
  font-feature-settings: "salt" on, "clig" off, "liga" off;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 700 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const AnotherSpace = styled.div`
  border-radius: 15px;
  border: 1px solid transparent;
  align-self: stretch;
  align-items: center;  // Corrected spelling here
  display: flex;
  margin-top: 30px;
  justify-content: center;
  gap: 20px;
  padding: 4px 5px;
  @media (max-width: 900px) {
    max-width: 70%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 20px;
  }
`;


const BidTime = styled.div`
  color: #181818;
  flex-grow: 1;
  flex-basis: auto;
  font: 600 24px/32px Inter, sans-serif;
`;

const BidService = styled.div`
  color: var(--main-color, #e7b31a);
  margin-top: 22px;
  margin-right: 373px;
  font: 600 24px/32px Inter, sans-serif;
`;

const Eye = styled.div`
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;

const Img12 = styled.img`
  aspect-ratio: 1.35;
  object-fit: contain;
  object-position: center;
  width: 23px;
  overflow: hidden;
  max-width: 100%;
`;

const Viewed = styled.div`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  margin-top: 9px;
  white-space: nowrap;
  font: 700 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SeeBtn = styled.div`
  color: var(--white, #fff);
  white-space: nowrap;
  justify-content: center;
  align-items: start;
  border-radius: 111px;
  background-color: var(--main-color, #e7b31a);
  align-self: center;
  margin-top: 53px;
  width: 207px;
  max-width: 100%;
  padding: 20px 59px;
  font: 700 16px/24px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px;
  }
`;



const Div48 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 59px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  padding: 0 59px 0 11px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
    margin-top: 40px;
  }
`;
const Div49 = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;
const Div55 = styled.div`
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;
const Div52 = styled.div`
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  align-self: stretch;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  gap: 20px;
  padding: 42px 25px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 20px;
  }
`;


export default VendorDashboardComponent