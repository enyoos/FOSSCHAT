import { useState } from "react"

export default function Join ( {navigate, setUser} )
{
    function handleSubmit (e)
    {
        e.preventDefault();
        navigate( "/chat" )
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Enter your username</label>
            <input type="text" onChange={ e => setUser ( e.target.value )}/>
            <input type="submit"/>
        </form>
    )
}