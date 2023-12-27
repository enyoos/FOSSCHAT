import { useEffect, useState } from "react"
import { EVENTS, socket } from "../socket";
import { useSearchParams } from "react-router-dom";
import ChatLog from "./ChatLog";

export default function ChatRoom ( {messages, username, navigate, setMessages, id, setId} )
{
    const [connected, setConnected] = useState( false );
    const [value, setValue] = useState("");

    function handleClick( )
    {
        let newId = id ++;
        setId ( newId);

        let msg = value.trim();

        setValue ( "" );

        setMessages( message => [...message, msg])
        socket.emit( EVENTS["SEND_MESSAGE"] , msg);
    }

    useEffect( () => {
        socket.connect();
        return setConnected( true );
    }, []);

    return ( 
        <>
            {connected ? <span> you're now connected </span> : <span> Connecting ...  </span> }
            <h1>
                Welcome, {username}
            </h1>
            <input value={value} type="text" onChange={e => setValue(e.target.value)} placeholder="What do you want to say"/>
            <button onClick={handleClick}>
                OK
            </button>

            <ChatLog messages={messages} setMessages={setMessages} id={id} setId={setId} />
        </>
    )
}