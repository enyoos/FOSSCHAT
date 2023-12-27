import { Server } from "socket.io";

const URL = "http://localhost:3000";
const PORT = 4000;
var   CLIENTS_SOCKET = [];


// those are also defined in the socket.js file.
const EVENTS = {
    "SEND_MESSAGE" : "SEND_MSG",
    "DELETE_MESSAGE": "DEL_MSG",
}

const io = new Server({
  cors: {
    origin: URL
  }
});

io.on( 'connection', ( socket ) => {


    socket.on(EVENTS["SEND_MESSAGE"], ( msg ) => {
      console.log ( "someone just sent a message : " + msg );
    })
    
    socket.on( EVENTS["DELETE_MESSAGE"], ( msg ) => {
      console.log ( "someone wants to delete msg with content : " + msg );
    })
});

// io.on( 'disconnection', ( socket ) => {
//     console.log ( "some user is disconnected" );
// });

io.listen(PORT, () => console.log ( "Listening for incoming connections ..."));
