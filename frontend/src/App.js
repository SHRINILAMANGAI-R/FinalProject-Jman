import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateUser from './component/CreateUser';
import Login from './component/login';
import Profile from './component/profile';
import PerformanceDetails from './component/PerformanceDetails';
import AdminHome from './component/admin ';
import InternHome from './component/Intern';
import EmployeeHome from './component/emp';
import card from './component/card';
import AddEvent from './component/AddTraining'

function App() {
  return (
    <div>
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route path="/createuser" element={<CreateUser/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/PerformanceDetails" element={<PerformanceDetails/>} />
        <Route path="/AdminHome" element={<AdminHome/>} />
        <Route path="/InternHome" element={<InternHome/>} />
        <Route path="/EmployeeHome" element={<EmployeeHome/>} />
        <Route path="/card" element={<card/>}/>
        <Route path="/AddEvent" element={<AddEvent/>}/>
      </Routes>
    </div>
  );
}

export default App;
