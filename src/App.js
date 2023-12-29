import React, { useState, useEffect } from 'react';
import Join from './components/Join';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import User from './components/User';
import CCR from './components/CCR';

// LET'S REFACTOR WITH REDIS-JS ( 12/29/2023 )

export default function App() {

  const [messages, setMessages]       = useState( [] );
  const [id, setId]                   = useState( 0 );
  // THE USER CAN JOIN MULTIPLE ROOMS
  const [rooms, setRooms]            = useState( [] );

  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  return (
      <Routes>
        <Route path='/' element={<Join navigate={navigate} setUser={setUsername}/>}/> 
        <Route path="/chat" element={<ChatRoom id={id} setId={setId} username={username} navigate={navigate} setMessages={setMessages} messages={messages}/>}/>
        <Route path="/user" element={<User navigate={navigate} username={username} setUsername={setUsername}/>}/>
        <Route path='/user/create' element={<CCR username={username}/>}/>
      </Routes>
  );
}