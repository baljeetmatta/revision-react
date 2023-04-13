import React from 'react';
type Buttonprops={
    value:string;
    click:()=>void;
}
const MyButton=(props:Buttonprops)=>{

    const clickHandler=()=>{
        alert("Button clicked");
    }

    return (
        <>
        <button onClick={props.click} >{props.value}</button>
        </>
    )

}
export default MyButton;
