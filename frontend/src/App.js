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
import InternCard from './component/InternCard';
import EmpCard from './component/EmpCard';
import AddEvent from './component/AddTraining'
import Assessment from './component/Assessment';
import Performance from './component/Performance';
import User from './component/User';
import Feedback from './component/feedback';

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
        <Route path="/InternCard" element={<InternCard/>}/>
        <Route path="/EmpCard" element={<EmpCard/>}/>
        <Route path="/AddEvent" element={<AddEvent/>}/>
        <Route path="/Assessment" element={<Assessment/>}/>
        <Route path="/Performance" element={<Performance/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
      </Routes>
    </div>
  );
}

export default App;
