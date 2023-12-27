import OnChat from "./OnChat";

export default function ChatLog ( {messages, setMessages, id} )
{

    return ( 
        <>
            <ul>
                { messages.map ( msg => <><OnChat message={msg} setMessage={setMessages} id={ id }/></>) } 
            </ul>
        </>
    )
}