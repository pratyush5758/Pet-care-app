import React, {createContext, ReactNode, useContext, useState} from 'react';

const AppContext = createContext({});



export default ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
