import React from 'react';


const Person = ( props )=>{

    return (
        <div onClick={props.click}>
            <h1>{props.Name}</h1>
            <h1>{props.age}</h1>
            <input type="text" onChange={props.change}/>
        </div>
    );
}


export default Person;