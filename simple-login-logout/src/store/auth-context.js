import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogIn: () => {},
    openModal: () => {},
    closeModal: () => {},
    isOpen: false,
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
      const isAdmin = localStorage.getItem('IS_ADMIN');
      setIsLoggedIn(isLoggedIn === 'true');
      setIsOpen(isAdmin === 'true');
    }, []);

    const openModal = () => {
      // We should of course check email and password
      // But it's just a dummy/ demo anyways
      localStorage.setItem('IS_ADMIN', 'true');
      setIsOpen(true);
    };

    const closeModal = () => {
      localStorage.setItem('IS_ADMIN', 'false');
      setIsOpen(false);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogIn: loginHandler,
            openModal: openModal,
            closeModal: closeModal,
            isOpen: isOpen,
        }} >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;