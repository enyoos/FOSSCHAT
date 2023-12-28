import { useEffect, useState } from "react"
import { EVENTS, socket } from "../socket";
import { useSearchParams } from "react-router-dom";
import ChatLog from "./ChatLog";
import { assertEq, isImage } from "../Utils";

export default function ChatRoom ( {messages, username, navigate, setMessages, id, setId} )
{
    const [connected, setConnected] = useState( false );
    const [blob, setBlob]           = useState( [] );
    const [file, setFile]           = useState( null );
    const [value, setValue] = useState("");

    async function handleUpload( e ){

        let filename = e.target.files[0].name;
        if ( isImage( filename ) )
        {
            let image = e.target.files[0];
            const buffer = await image.arrayBuffer();
            let byteArray = new Int8Array( buffer );
            setBlob(Array.prototype.slice.call(byteArray));
        }
        else 
        {
            // how can we render this file on the UI?
            setFile ( e.target.files[0] );
        }

   }

    function handleSubmit( e )
    {
        e.preventDefault()
        setId ( id + 1 );

        let msg = { content : value, author : username, image : blob, file : file};

        setValue ( "" );
        setMessages( message => [...message, msg])

        socket.emit( EVENTS["SEND_MESSAGE"] , msg);
    }

    useEffect( () => {
        socket.connect();
        function onConnect () { setConnected( true ); }
        function onDisconnect () { setConnected( false );}

        function onSendMessageEvent( value ) { setMessages( prevMsgs => [...prevMsgs, value ]); }

        // maybe just replace by something else right ?
        function onDeleteMessage( msgObj ) { setMessages( ( prevmsgs ) => [...prevmsgs.filter ( item => !assertEq( item, msgObj))] ); }

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
                <input type="file" onChange={e => handleUpload( e )}/>
                <input type="submit" value={"OK"}/>
            </form>
            <ChatLog setId={setId} username={username} messages={messages} setMessages={setMessages} id={id}/>
        </>
    )
}