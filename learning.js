// you can change the values of an object ( mutation )
obj = {
    content : "content",
    id      : 55, 
    author  : "some author"
}

obj.author = "another author";

// should display the "another author"
console.log ( obj.author );

// the setters in the react are handled async, 
// so if want to track the value of a state it is better to store it in var
// meanwhile ( performing the wanted ops on it );
// and then console log it after the setter call