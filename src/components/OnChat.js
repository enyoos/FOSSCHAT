import { EVENTS, socket } from "../socket";
import "./OnChat.css";
import { useEffect, useState } from "react"
import { maskString, printR } from "../Utils";
import ButtonShow from "./ButtonShow";

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
                {message.author === username ? <button onClick={handleDelete}> 🗑️ </button> : <ButtonShow setShow={setShow} show={show}/>} 
            </li>
        </>
    )
}
