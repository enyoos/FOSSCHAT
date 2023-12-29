import { Server } from "socket.io";

// you MIGHT WANT TO STORE THAT IN A DB ?
const URLS = ["http://localhost:3000", "http://localhost:3001", "http://localhost:5057", "http://localhost:5056"];
const ROOMS = [];

// those are also defined in the socket.js file.
export const EVENTS = {
  "SEND_MESSAGE" : "SEND_MSG",
  "DELETE_MESSAGE": "DEL_MSG",
  "CREATE_ROOM"   : "C_ROOM",
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
    // TO REFACTOR, TAKING INTO ACCOUNT THE ROOMS
    console.log ( "someone just sent a message : " + msg.content);
    socket.broadcast.emit (EVENTS["SEND_MESSAGE"], msg);
  });
  
  socket.on( EVENTS["DELETE_MESSAGE"], ( msg ) => {
    // TO REFACTOR, TAKING INTO ACCOUNT THE ROOMS
    console.log ( "someone wants to delete the msg : " + msg.content + " with the author : " + msg.author );
    socket.broadcast.emit ( EVENTS["DELETE_MESSAGE"], msg );
  });

  socket.on( EVENTS["CREATE_ROOM"], ( obj ) => {
    // msg : ( roomName, author)
    console.log ( "someone wants to create a chat room with the name : " + obj.name );
    // we should only join if the client WANTS TO JOIN
    // IN REALITY, WE SHOULD ONLY PERSIST INTO THE RAM THE OBJ ROOM.
    // socket.join (obj.roomName.trim());
    ROOMS.push( obj );
  });

});

console.log ( "Listening for some connections ..." );
io.listen(PORT);