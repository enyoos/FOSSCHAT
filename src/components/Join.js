import { useRef, useState } from "react"
import { socket } from "../socket";
import {v4 as uuid} from 'uuid'

export default function Join ( {navigate, setUsername} )
{
    const id = useRef( uuid() );
    
    function handleSubmit (e)
    {
        e.preventDefault();

        // IN REALITY ON SUBMIT, WE SHOULD CONNECT TO THE SERVER
        socket.connect();

        navigate( "/user" );
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Enter your username</label>
            <input type="text" onChange={ e => setUser ( e.target.value )}/>
            <span>Your gamer tag : {id}</span><br/>
            <input type="submit"/>
        </form>
    )
}