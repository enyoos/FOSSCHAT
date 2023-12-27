import { Server } from "socket.io";

const URLS = ["http://localhost:3000", "http://localhost:3001"];

// those are also defined in the socket.js file.
const EVENTS = {
  "SEND_MESSAGE" : "SEND_MSG",
  "DELETE_MESSAGE": "DEL_MSG",
}

const PORT = 4000;

const io = new Server({
  cors: {
    origin: URLS
  }
});

// emitting the stuff
io.on( 'connection', ( socket ) => {

  console.log( "incoming connection !" );
  socket.on(EVENTS["SEND_MESSAGE"], ( msg ) => {
    console.log ( "someone just sent a message : " + msg );
    socket.broadcast.emit (EVENTS["SEND_MESSAGE"], msg);
  })
  
  socket.on( EVENTS["DELETE_MESSAGE"], ( msg ) => {
    console.log ( "someone wants to delete msg with content : " + msg );
  })
});



console.log ( "Listening for some connections ..." );
io.listen(PORT);
