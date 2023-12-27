import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import Join from './components/Join';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';

export default function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages]       = useState( [] );
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [fooEvents, setFooEvents] = useState([]);

  // for documentation
  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true);
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //   }

  //   function onFooEvent(value) {
  //     setFooEvents(previous => [...previous, value]);
  //   }

  //   socket.on('connect', onConnect);
  //   socket.on('disconnect', onDisconnect);
  //   socket.on('foo', onFooEvent);

  //   return () => {
  //     socket.off('connect', onConnect);
  //     socket.off('disconnect', onDisconnect);
  //     socket.off('foo', onFooEvent);
  //   };
  // }, []);

  return (
      <Routes>
        <Route path='/' element={<Join navigate={navigate} setUser={setUsername}/>}/> 
        <Route path="/chat" element={<ChatRoom username={username} navigate={navigate} setMessages={setMessages}/>}/>
      </Routes>
  );
}