
// App.js

import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/account/login';
import CreateEvent from './pages/employee/event/create_event.js'; 
import Dashboard from './pages/employee/dashboard/dashboard'; 
import CreateAccount from './pages/account/signup'
import EventList from './pages/employee/event/eventList';
import TicketList from './pages/employee/ticket/tickets';
import UserDashboard from './pages/user/dashboard/userDashboard';
import UserProfile from './pages/user/profile/userProfile';
import MyTickets from './pages/user/ticket/userTickets';
import MyEvents from './pages/user/event/myEvents';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
      
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path='/signup' element={<CreateAccount/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/event-list' element={<EventList/>}/>
          <Route path='/tickets' element={<TicketList/>}/>
          <Route path='/user-dashboard' element={<UserDashboard/>}/>
          <Route path='/user-profile' element={<UserProfile/>}/>
          <Route path='/user-tickets' element={<MyTickets/>}/>
          <Route path='/user-events' element={<MyEvents/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
