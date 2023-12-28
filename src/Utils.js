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