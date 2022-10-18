import logo from './logo.svg';
import './App.css';
import Error from './components/Error';
import Login from './components/Login';
import { Router,Route,Routes } from 'react-router-dom';
import GetAllClaims from './components/GetAllClaims';

function App() {
  return (
    <div className="container">
      
      <Routes>
        <Route path='/' exact element={<Error/>}/>
        <Route element={<Error/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path ='/error' element={<Error/>}/>
        <Route path ='/getallclaims' element={<GetAllClaims/>}/>
        
      </Routes>
      
      
    
    </div>
  );
}

export default App;
