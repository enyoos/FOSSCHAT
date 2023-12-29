import "./ImageView.css";

export default function ImageView ( { src, alt, show } )
{
    return ( 
        <div className="container">
            <img src={show ? src : "/default-no-img.png"} alt={alt}/>
        </div>
    );
}