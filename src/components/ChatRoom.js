import { useEffect, useState } from "react"
import { EVENTS, socket } from "../socket";
import { useSearchParams } from "react-router-dom";
import ChatLog from "./ChatLog";
import { assertEq } from "../Utils";

export default function ChatRoom ( {messages, username, navigate, setMessages, id, setId} )
{
    const [connected, setConnected] = useState( false );
    const [value, setValue] = useState("");

    function handleSubmit( e )
    {
        e.preventDefault()
        setId ( id + 1 );

        let msg = { content : value, author : username };
        setValue ( "" );
        setMessages( message => [...message, msg])

        socket.emit( EVENTS["SEND_MESSAGE"] , msg);
    }

    useEffect( () => {
        socket.connect();
        function onConnect () { setConnected( true ); }
        function onDisconnect () { setConnected( false );}

        function onSendMessageEvent( value ) {
            setMessages( prevMsgs => [...prevMsgs, value ]); 
        }
        
        function onDeleteMessage( msgObj )
        {

            function isSpeceficMsg ( msg ) { return !assertEq( msgObj, msg ) };
            setMessages( (previousMessages) => {
                // console.log ( "the pMsg :A "+ previousMessages);
                // console.log ( "the msg filtered : " + previousMessages.filter( isSpeceficMsg ));
                previousMessages.filter ( isSpeceficMsg );
            }
            );
        }

        socket.on( 'disconnect', onDisconnect )
        socket.on('connect', onConnect);
        socket.on( EVENTS["SEND_MESSAGE"], onSendMessageEvent);
        socket.on( EVENTS["DELETE_MESSAGE"], onDeleteMessage );

        return() => {
            socket.off ( EVENTS["SEND_MESSAGE"], onSendMessageEvent);
            socket.off ( EVENTS["DELETE_MESSAGE"], onDeleteMessage );
            socket.off ( 'connect', onConnect );
            socket.off( 'disconnect', onDisconnect )
        }
    }, []);

    return ( 
        <>
            {connected ? <span> you're now connected </span> : <span> Connecting ...  </span> }
            <h1>
                Welcome, {username}
            </h1>
            <form onSubmit={handleSubmit}>
                <input value={value} type="text" onChange={e => setValue(e.target.value)} placeholder="What do you want to say"/>
                <input type="submit" value={"OK"}/>
            </form>
            <ChatLog setId={setId} username={username} messages={messages} setMessages={setMessages} id={id}/>
        </>
    )
}