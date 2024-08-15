
export function Coffee(){
    const caliente = true;
    // if(caliente){
    //     return (
    //         <h1>Café caliente</h1>
    //     )

    // }else{
    //     return (<h1>Café frio</h1>)
    // }
    // return ( caliente ? <h1>Cafe caliente</h1> : <h1>Cafe frio</h1> )
    return ( <h1>{caliente ? 'Cafe caliente' : 'Cafe frio'}</h1>)
}

// export default Coffee;
