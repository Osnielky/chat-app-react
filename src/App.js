import { useState } from 'react'; // Add this
import React from 'react';
import { io } from "socket.io-client";
import './App.css';
import Home from './pages/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//import HomePage from './';

const socket = io('<http://localhost:3000>');
//import UserProfile from './UserProfile';
 // Add this


function App() {
  const [username, setUsername] = useState(''); // Add this
  const [room, setRoom] = useState('');
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                username={username} // Add this
                setUsername={setUsername} // Add this
                room={room} // Add this
                setRoom={setRoom} // Add this
                socket={socket} // Add this
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
