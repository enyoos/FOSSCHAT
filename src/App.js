import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import Join from './components/Join';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';

export default function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [id, setId]                   = useState( 0 );
  const [messages, setMessages]       = useState( [] );
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [fooEvents, setFooEvents] = useState([]);
  
  return (
      <Routes>
        <Route path='/' element={<Join navigate={navigate} setUser={setUsername}/>}/> 
        <Route path="/chat" element={<ChatRoom id={id} setId={setId} username={username} navigate={navigate} setMessages={setMessages} messages={messages}/>}/>
      </Routes>
  );
}