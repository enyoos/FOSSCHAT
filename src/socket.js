import { io } from 'socket.io-client';

const PORT = 5055;

export const EVENTS = {
  "SEND_MESSAGE" : "SEND_MSG",
  "DELETE_MESSAGE": "DEL_MSG",
  "CREATE_ROOM"   : "C_ROOM",
}

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : `http://localhost:${PORT}`;

export const socket = io(URL, {
  autoConnect: false
});