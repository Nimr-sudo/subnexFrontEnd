import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [shopInfo, setShopInfo] = useState(null); // Initialize shopInfo state

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, shopInfo, setShopInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
