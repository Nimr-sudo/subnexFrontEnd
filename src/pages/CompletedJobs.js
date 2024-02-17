import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import { baseURL } from '../config';

function CompletedJobs(props) {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/shop-completed`)
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching pending jobs:", error));
  }, []);
  // Function to chunk the jobs array into arrays of 3 elements each
  const chunkedJobs = jobs.reduce((acc, job, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(job);
    return acc;
  }, []);

  return (
    <Div>
      <Div2>
        <Div3>
          {chunkedJobs.map((row, rowIndex) => (
            <Column key={rowIndex}>
              {row.map((job) => (
                <StyledLink to={`/placed-Complete/${job.id}`} key={job.id}>
                  <StyledCard>
                    <CardHeading>{job.title}</CardHeading>
                    <CardText>{formatDescription(job.description)}</CardText>
                    <CardButton>Complete</CardButton>
                  </StyledCard>
                </StyledLink>
              ))}
            </Column>
          ))}
        </Div3>
      </Div2>
      <SeeMoreButton to="/placed-Complete">See more</SeeMoreButton>
    </Div>
  );
}

// Function to format description as specified
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





const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Div2 = styled.div`
  align-self: stretch;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
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
  width: 35%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledCard = styled.div`
  width: 443px; // Adjust the width based on your styling needs
  box-sizing: border-box;
  margin-bottom: 20px;
  align-items: end;
  box-shadow: -2px 4px 12px 0px rgba(24, 24, 24, 0.08);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px 24px 16px 16px;
  border-radius: 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-right: 20px;
  }
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
  text-align: center; /* Center text horizontally */
  text-decoration: none; /* Remove default link underline */
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
    background-color: #c19315; /* Change the color as needed */
  }
`;




export default CompletedJobs