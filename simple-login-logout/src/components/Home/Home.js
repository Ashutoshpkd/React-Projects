import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import AdminModal from '../AdminModal/AdminModal';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <>
      {ctx.isOpen && (<AdminModal />)}
      <Card className={classes.home}>
        <h1>Welcome back!</h1>
      </Card>
    </>
  );
};

export default Home;
