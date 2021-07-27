import Routes from './routes/Routes';
import Notifications from 'react-notifications-component';
import GlobalStyles from './assets/styles/GlobaStyles';
import "./assets/styles/css/base.css";

function App() {
  return (
    <>
      <Notifications />
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
