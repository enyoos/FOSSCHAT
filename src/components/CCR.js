import { useState } from "react";
import { EVENTS, socket } from "../socket";
import "./span.css";

// CCR : Create Chat Room
export default function CCR ( { username })
{
    const [value, setValue] = useState( "" );
    const [msg, setMsg]     = useState( "" );

    function handleSubmit ( e )
    {
        const roomName = value;
        setValue( "" );
        e.preventDefault();

        console.log ( "the room name : " + roomName );
        console.log ( "the username : " + username)  ;
        
        const packet = {
            name : roomName,
            creator : username,
        }

        socket.emit ( 
            EVENTS["CREATE_ROOM"], packet 
        )

        setMsg( "Created the chat rooms" );
    }

    return ( 
        <>
            <h1>
                Create Your Own chat Room
            </h1>

            <span className="OK">{msg}</span>
            <form onSubmit={ ( e ) => handleSubmit ( e )}>
                <label>
                    The room name
                </label>
                <input value={value} onChange={( e ) => setValue( e.target.value )} type="text" required/>
            </form>

        </>
    )
}