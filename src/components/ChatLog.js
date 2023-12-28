import OnChat from "./OnChat";

export default function ChatLog ( {setId, username, messages, setMessages, id} )
{

    return ( 
        <>
            <ul>
                { messages.map ( msg => <><OnChat setId={setId} username={username} message={msg} setMessage={setMessages} id={ id }/></>) } 
            </ul>
        </>
    )
}