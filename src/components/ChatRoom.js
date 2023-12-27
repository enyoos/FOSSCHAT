import { useEffect, useState } from "react"
import { socket } from "../socket";
import { useSearchParams } from "react-router-dom";

export default function ChatRoom ( {username, navigate, setMessages} )
{
    const [value, setValue] = useState("");

    function handleClick( )
    {
        setMessages( messages => [...messages, value.trim()])

        // emit the SEND_MSG event.
        // socket.emit(  )
    }

    useEffect( () => {
        socket.connect();
        // socket.on('connect', onConnect);
        // socket.on('disconnect', onDisconnect);
        // socket.on('foo', onFooEvent);

        // return () => {
        //     socket.off('connect', onConnect);
        //     socket.off('disconnect', onDisconnect);
        //     socket.off('foo', onFooEvent);
        // }
    }, []);

    return ( 
        <>
            <h1>
                Welcome, {username}
            </h1>
            <input type="text" onChange={e => setValue(e.target.value)} placeholder="What do you want to say"/>
            <button onClick={handleClick}>
                OK
            </button>
        </>
    )
}