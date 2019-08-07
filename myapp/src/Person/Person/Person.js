import React, { Component } from 'react';
import './Person.css';

const Person=(props)=> {// it is a state less component (functional/presentational)

    return (
      <div>
        <p onClick={props.click}>Person here is  {props.name} and age is {props.age}</p>
        <p>{props.children}</p>
      </div>
    );
  //}
}

export default Person;