import { Server } from "socket.io";

const URL = "http://localhost:3000";
const PORT = 4000;
const EVENTS = {
    SEND_MESSAGE : "SEND_MSG",
}
const io = new Server({
  cors: {
    origin: URL
  }
});

io.on( 'connection', ( socket ) => {

    console.log ( "someone just connected");

    socket.on("create-something", ( msg ) => {
        console.log ( "someone wants to create something... : " + msg );
    })
});

// io.on( 'disconnection', ( socket ) => {
//     console.log ( "some user is disconnected" );
// });

io.listen(PORT, () => console.log ( "Listening for incoming connections ..."));
