import { io } from 'socket.io-client';

export const EVENTS = {
  "SEND_MESSAGE" : "SEND_MSG",
  "DELETE_MESSAGE": "DEL_MSG",
}

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';

export const socket = io(URL, {
  autoConnect: false
});