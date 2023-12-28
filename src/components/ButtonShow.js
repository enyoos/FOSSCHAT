import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import { useEffect, useState } from "react"

export default function ButtonShow ({ show, setShow } )
{
    const [bool, setBool] = useState( true );
    // this code doesn't works..
    const defaultJsx = <FontAwesomeIcon icon={faEye}/>;
    const closedEyeJsx = <FontAwesomeIcon icon={faEyeSlash}/>

    function handleClick( e ) { 
        e.preventDefault();
        setShow( !show );
        setBool( !bool );
    }

    return (
        <button className="button" onClick={handleClick}>{bool ? closedEyeJsx: defaultJsx}</button>
    )
}