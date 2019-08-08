import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person/Person';
import UserInput from './UserInput/UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput/UserOutput';

class App extends Component {// it is a state full component (smart /container)

  state={ 
    userName:'superMax', 
    showPerson:false,  //State property  if state changes the react will re-render the dom
    persons:[
      {name:"Arjun",age:27,id:'asas'},
      {name:"Arya",age:26,id:'gfhj'}
    ]
    
  };
 
  switchNameHandler=(newName)=>{ //to change the name upon a click
  
  //this.state.persons[0].name="Ramu";// we shouldn't mutate a state like this react can't recognize
  this.setState({persons:[
    {name:newName,age:27},
    {name:"Chikku",age:26}
  ]})
  }
  nameChangeHandler=(event,id)=>{  // we want to update the name only for the person input we typed
   const personIndex= this.state.persons.findIndex(p=>{  //it's output will be boolean whether that id exist or not
     return p.id===id;// it will execute a function for every elements in this persons array
   });
   const person={ // creating copy of persons array for not to mutate original array
      ...this.state.persons[personIndex]
   };
   person.name=event.target.value; // updating the duplicate array here

   const persons=[...this.state.persons];// creating a duplicate array again
   persons[personIndex]=person;// assigning new person to the corresponding position of new persons array
   

   this.setState({persons:persons});//updating the array with new value

  }
  changeUserHandler=(event)=>{
   this.setState({userName:event.target.value})

  }
  togglePersonHandler=()=>{
    const doesShow=this.state.showPerson;
    this.setState({showPerson:!doesShow});
  }
  deletePersonHandler=(personIndex)=>{
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  render(){
    const style={
      backgroundClor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    let persons=null;
   if(this.state.showPerson){
    persons=(

      <div>  {/*outputtinf as list this is the recommended approach*/}

      {this.state.persons.map((person,index)=>{
        return <Person changed={(event)=>this.nameChangeHandler(event,person.id)}  click={()=>this.deletePersonHandler(index)}name={person.name} age={person.age} key={person.id}></Person>
      })}
      </div>
    // <div>
    // <Person  
    // changed={this.nameChangeHandler} 
    // click={this.switchNameHandler.bind(this,"Arjun Raj")} 
    // name={this.state.persons[0].name} 
    // age={this.state.persons[0].age}>My Hobbies: Drawing
    // </Person>  
    // <Person 
    // name={this.state.persons[1].name} 
    // age={this.state.persons[1].age}>
    // </Person>
    // </div>
    );
   }
    return (
      <div className="App">
      <h1>Hi I am React App</h1>
      <button style={style} onClick={this.switchNameHandler.bind(this,"Arya B Raj")}>Change Name /Start</button>
      <button style={style} onClick={this.togglePersonHandler}>Toggle person</button>
      {persons}
        <UserInput  changeUser={this.changeUserHandler} currentName={this.state.userName}></UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>   
        <UserOutput userName={this.state.userName}></UserOutput>  
        <UserOutput userName="Mittu"></UserOutput>     
      </div>
    );

  }
  
}

export default App;
