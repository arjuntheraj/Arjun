import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person/Person';

class App extends Component {// it is a state full component (smart /container)

  state={    //State property  if state changes the react will re-render the dom
    persons:[
      {name:"Arjun",age:27},
      {name:"Arya",age:26}
    ]
  };
  switchNameHandler=()=>{ //to change the name upon a click
  
  //this.state.persons[0].name="Ramu";// we shouldn't mutate a state like this react can't recognize
  this.setState({persons:[
    {name:"Ramu",age:27},
    {name:"Chikku",age:26}
  ]})
  }
  render(){
    return (
      <div className="App">
      <h1>Hi I am React App</h1>
      <button onClick={this.switchNameHandler}>Toggle state</button>
      <Person click={this.switchNameHandler} name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Drawing</Person>  {/*Reusing custom component here*/}
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>      
      </div>
    );

  }
  
}

export default App;
