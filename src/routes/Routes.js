import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';

const Routes = () => {
  const location = useLocation();
  
  return (
    <>
      {location.pathname !== '/login' && <Navbar />}
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
