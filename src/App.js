import Routes from './routes/Routes';
import Notifications from 'react-notifications-component';
import GlobalStyles from './assets/styles/GlobaStyles';
import 'react-notifications-component/dist/theme.css'

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
