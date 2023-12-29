import { EVENTS, socket } from "../socket";
import "./OnChat.css";
import { useEffect, useState } from "react"
import { constructSource, maskString, printR } from "../Utils";
import ButtonShow from "./ButtonShow";
import ImageView from "./ImageView";

export default function OnChat ( {username, setId, id, message, setMessage } )
{

    const [show, setShow] = useState ( true );

    function handleDelete ( )
    {
        function filterByContent ( content ) { return content !== message; }
        setMessage( ( previousMsg ) => [...previousMsg.filter ( filterByContent ) ]);
        // decrement the id.
        setId ( id - 1 );
        socket.emit( EVENTS["DELETE_MESSAGE"], message );
    }

    return (
        <>
            <li key={id}>
                <span className="who">[{message.author === username ? "You" : message.author}] says: </span> {show ? message.content : maskString( message.content ) }
                {/* MAYBE IMPLEMENT A NEW HOVER SYSTEM : SHOW BUTTON TO DISABLE ... */}
                {message.image.length !== 0 ?  <ImageView src={constructSource(message.image)} alt={message.author + " 's image"} show={show}/> : ""}
                
                {/* TODO... */}
                {/* do I display a link to the file .... */}
                {/*message.file !== null ? */}
                {message.author === username ? <button onClick={handleDelete}> 🗑️ </button> : <ButtonShow setShow={setShow} show={show}/>} 
            </li>
        </>
    )
}
