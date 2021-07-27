import { Switch, Redirect, useLocation } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { isLogged } from '../utils/authCookieUtil';

import Navbar from '../components/Navbar/Navbar';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const Routes = () => {
  const location = useLocation();

  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (isLogged()) {
        
        next();
      }
      next.redirect('/login');
    } else {
      next();
    }
  };

  return (
    <GuardProvider guards={[requireLogin]}>
      {location.pathname !== '/login' && location.pathname !== '/signup' && (
        <Navbar />
      )}
      <Switch>
        <GuardedRoute exact path="/login" component={LoginPage} />
        <GuardedRoute exact path="/signup" component={SignUpPage} />
        <GuardedRoute exact path="/" component={HomePage} meta={{ auth: true }} />
        <GuardedRoute exact path="*">
          <Redirect to="/login" />
        </GuardedRoute>
      </Switch>
    </GuardProvider>
  );
};

export default Routes;
