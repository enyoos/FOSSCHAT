import { EVENTS, socket } from "../socket";

export default function OnChat ( { id, message, setMessage } )
{

    function handleDelete ( )
    {
        function filterByContent ( content ) { return content !== message; }
        setMessage( ( previousMsg ) => [...previousMsg.filter ( filterByContent ) ]);
        console.log ( "deleted : " + message );

        socket.emit( EVENTS["DELETE_MESSAGE"], message );
        
    }

    return (
        <>
            <li key={id}>
                {message}
            </li>
            <button onClick={handleDelete}> 🗑️ </button>
        </>
    )
}
