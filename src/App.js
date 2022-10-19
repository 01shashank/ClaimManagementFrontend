import logo from './logo.svg';
import './App.css';
import Error from './components/Error';
import Login from './components/Login';
import { Router,Route,Routes } from 'react-router-dom';
import GetAllClaims from './components/GetAllClaims';
import GetClaimsForUser from './components/GetClaimsForUser'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './components/logout';
import authenticationService from './services/authenticationService';
import ClaimManagement from './components/ClaimManagement';

function App() {
  
  
  return (
    <div className="container">
      <ClaimManagement/>
    </div>
  );
}

export default App;
