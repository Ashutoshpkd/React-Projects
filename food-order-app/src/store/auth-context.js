import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    openModal: () => {},
    closeModal: () => {},
    isOpen: false,
});

export const AuthContextProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      const isAdmin = localStorage.getItem('IS_ADMIN');
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
            openModal: openModal,
            closeModal: closeModal,
            isOpen: isOpen,
        }} >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;