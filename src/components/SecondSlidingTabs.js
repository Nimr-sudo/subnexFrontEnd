import { FaBars } from 'react-icons/fa';
import React, { useState } from 'react';
import styled from 'styled-components';
import CompletedJobs from '../pages/CompletedJobs';
import PendingJobs from '../pages/PendingJobs';
import PostJobComponent from '../components/PostJob';
import ShopDashboardCompnent from './ShopDashboard';
import UserContext from '../pages/UserContext';


const options = [
  { id: 1, label: 'Pending Jobs', component: PendingJobs },
  { id: 2, label: 'Completed', component: CompletedJobs },
  { id: 3, label: 'Post Jobs', component: PostJobComponent },
  { id: 4, label: 'Posted Jobs', component: ShopDashboardCompnent },
];

const SecondSlidingTabs = () => {
  const [activeOption, setActiveOption] = useState(options[0].id);
  const { shopInfo } = React.useContext(UserContext);

  const handleOptionClick = (optionId) => {
    setActiveOption(optionId);
  };

  return (
    <Container>
      <TabsContainer>
        {options.map((option) => (
          <Tab
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            isActive={activeOption === option.id}
          >
            {option.label}
          </Tab>
        ))}
        <YellowSlider style={{ left: `calc(${(activeOption - 1) * 25}% - 2px)` }}>
          <FaBars size={20} />
        </YellowSlider>
      </TabsContainer>
      <TabContent isActive={activeOption}>
      {options.map((option) =>
    activeOption === option.id ? <option.component key={option.id} shopInfo={shopInfo} /> : null
  )}
      </TabContent>
    </Container>
  );
};
const Container = styled.div`
  border-radius: 16px;
  box-shadow: 10px 40px 50px 0px rgba(229, 233, 246, 0.4);
  background-color: #fff;
  padding: 29px 44px 0 16px;
  margin: 20px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
  justify-content: space-around; /* Adjust this line to control space between tabs */
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
  }
`;


const Tab = styled.div`
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#e7b31a' : '#000')};
  white-space: nowrap;
  font: ${({ isActive }) => (isActive ? '400 28px Poppins, sans-serif' : '400 28px Poppins, sans-serif')};
  margin-bottom: 8px;
  position: relative;

  &:hover {
    color: #e7b31a;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const YellowSlider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px; /* Adjust the height as needed */
  width: 25%;
  background-color: #e7b31a;
  transition: left 0.3s ease;

  svg {
    display: none; /* Hide the icon */
  }
`;



const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  }
  padding: 20px;
`;

export default SecondSlidingTabs;
