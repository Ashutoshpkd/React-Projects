import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogIn: () => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
      // We should of course check email and password
      // But it's just a dummy/ demo anyways
      localStorage.setItem('IS_LOGGED_IN', 'true');
      setIsLoggedIn(true);
    };
  
    const logoutHandler = () => {
      localStorage.setItem('IS_LOGGED_IN', 'false');
      setIsLoggedIn(false);
    };
  
    useEffect(() => {
      const isLoggedIn = localStorage.getItem('IS_LOGGED_IN');
      setIsLoggedIn(isLoggedIn === 'true');
    }, []);

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogIn: loginHandler,
        }} >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;