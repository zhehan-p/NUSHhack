import logo from './logo.svg';
import './App.css';
import Titlebar from './Titlebar.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-3OpwKlCaQQqFoQtVz_CR_5mtYLn10H8",
  authDomain: "nushhack-bd3ba.firebaseapp.com",
  projectId: "nushhack-bd3ba",
  storageBucket: "nushhack-bd3ba.firebasestorage.app",
  messagingSenderId: "776117645348",
  appId: "1:776117645348:web:9976df6f68e5e6b793a8b1",
  measurementId: "G-KN9FMB51Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Content() {
  return (
    
  )
}

function App() {
  document.title = "app";

  return (
    <div className="App">
      <header className="App-header">
        <Titlebar/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;