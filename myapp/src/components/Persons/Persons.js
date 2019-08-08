import React from 'react';
import './Persons.css';
import Person from '../Persons/Person/Person/Person'

const Persons=(props)=> props.persons.map((person,index)=>{
    return <Person 
          changed={(event)=>props.changed(event,person.id)}  
          click={()=>props.clicked(index)}
          name={person.name} 
          age={person.age} 
          key={person.id}></Person>
  });



export default Persons;