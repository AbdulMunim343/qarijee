import { useEffect } from 'react';
import 'antd/dist/antd.css';
// import './App.css';
import LandingPage from './containers/landinPage';
import firebase from 'firebase';
// firebase app configs.
import firebaseConfig from './firebsaeConfig';

//Base function
function App() {
  // initializing firebase application with configs 
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <div className="App">
      {/* Home page container */}
      <LandingPage /> 
    </div>
  );
}

export default App;
