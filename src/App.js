import { useState } from 'react'; 
import React from 'react';
import { io } from "socket.io-client";
import './App.css';
import Home from './pages/home';
import Chat from './pages/chat';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//import HomePage from './';

const socket = io('<http://localhost:3000>');
//import UserProfile from './UserProfile';
 


function App() {
  const [username, setUsername] = useState(''); 
  const [room, setRoom] = useState('');
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                username={username} 
                setUsername={setUsername} 
                room={room} 
                setRoom={setRoom} 
                socket={socket} 
              />
            }
          />
          <Route
            path='/chat'
            element={<Chat username={username} room={room} socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
