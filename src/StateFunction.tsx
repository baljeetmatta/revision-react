import React, { useState } from 'react';
type LoginDetails={
    name:string;
    email:string;
}
const StateFunction = () => {

//let a=10;
const [data,setData]=useState(0);
const [details,setDetails]=useState<LoginDetails|null>(null);

const clickHandler=()=>{
   // a++;
    //console.log(a);
    setData(data+1);
}
    return (
        <>
            <p>
                the value of a is {data}

            </p>
            <button onClick={clickHandler}>Click me</button>
        </>
    )
}
export default StateFunction;