import React from 'react';
import './Person.css';

const Person=(props)=> {// it is a state less component (functional/presentational)

    return (
      <div className="Person">
        <p onClick={props.click}>Person here is  {props.name} and age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>
    );
  //}
}

export default Person;