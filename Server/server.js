import { Server } from "socket.io";


const URLS = ["http://localhost:3000", "http://localhost:3001", "http://localhost:5057", "http://localhost:5056"];
// those are also defined in the socket.js file.
export const EVENTS = {
  "SEND_MESSAGE" : "SEND_MSG",
  "DELETE_MESSAGE": "DEL_MSG",
}

const PORT = 5055;

const io = new Server({
  cors: {
    origin: URLS
  }
});

// emitting the stuff
io.on( 'connection', ( socket ) => {

  console.log( "incoming connection !" );
  socket.on(EVENTS["SEND_MESSAGE"], ( msg ) => {
    console.log ( "someone just sent a message : " + msg.content);
    socket.broadcast.emit (EVENTS["SEND_MESSAGE"], msg);
  })
  
  socket.on( EVENTS["DELETE_MESSAGE"], ( msg ) => {
    console.log ( "someone wants to delete the msg : " + msg.content + " with the author : " + msg.author );
    socket.broadcast.emit ( EVENTS["DELETE_MESSAGE"], msg );
  })
});



console.log ( "Listening for some connections ..." );
io.listen(PORT);
