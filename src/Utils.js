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


// takes two messages and compares its author, also its content.
export function assertEq ( msg1 , msg2 )
{
    let sameAuthor = msg1.author === msg2.author;
    let sameContent = msg1.content === msg2.content;
    return sameAuthor && sameContent;
}

const m1 = {
    content : "some content",
    author  : "some author"
}

const m2 = {
    content : "some content",
    author  : "some author"
}

console.log ( assertEq( m1, m2 ) );