function assertEq ( msg1 , msg2 )
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
    content : "som content",
    author  : "some author"
}

console.log ( assertEq( m1, m2 ) );