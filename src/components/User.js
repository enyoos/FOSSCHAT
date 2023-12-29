const CREATE = "/user/create";

export default function User ( { navigate, username, setUsername })
{
    function handleJoinChatRoom( e )
    {

    }

    function handleCreateCharRoom( e )
    {
        navigate( CREATE );
    }

    function handleClickFriends ( e )
    {

    }

    return ( 
        <>
            <h1>
                Welcome , {username}.
            </h1>

            <button onClick={handleJoinChatRoom}>
                Join a chat room
            </button>

            <button onClick={handleCreateCharRoom}>
                Create a chat room
            </button> 

            <button onClick={handleClickFriends}>
                Friends
            </button>
        </>
    )
}