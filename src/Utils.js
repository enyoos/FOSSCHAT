import { Suspense } from "react";

const SUPPORT_IMAGE_ENCODINGS = ["png", "jpg"];

export function tob64 ( barray ) { return btoa( new Uint8Array( barray ).reduce ( ( dt, byte ) => dt + String.fromCharCode(byte), '')); }

export function maskString ( str )
{
    const length = str.length;
    var ret = "";
    for ( let i = 0; i < length; i ++ ) { ret += "*"; }
    return ret;
}

export function printR ( obj )
{
    console.log( 'keys : ' + Object.keys ( obj ));
    console.log( 'values : ' + Object.values ( obj ) );
}

export function constructSource ( byteArray ) { return  "data:image/png;base64," + tob64( byteArray ); }

// takes two messages and compares its author, also its content.
export function assertEq ( msg1 , msg2 )
{
    let sameAuthor = msg1.author === msg2.author;
    let sameContent = msg1.content === msg2.content;
    let sameImage   = msg1.image   === msg2.image;
    let sameFile = msg1.file   === msg2.file;

    return sameAuthor && sameContent && sameFile && sameImage;
}

export function isImage ( filename ) { return SUPPORT_IMAGE_ENCODINGS.includes( filename.slice ( -3 )); }