import React from 'react'
type GreetProps={
    value:string;
    color?:string;
}
function Greet(props:GreetProps){

return (
<>
<p>Greeting from {props.value} </p>
<p>Greeting from {props.value}</p>
</>
)
}
export default Greet;