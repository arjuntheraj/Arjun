import React from 'react';
import './UserInput.css';

const UserInput =(props)=> {

const style={
  border:'2px solid black'
}
  //render() {
    return (
      <div>
        <input style={style} onChange={props.changeUser}type="text" value={props.currentName}></input>
      </div>
    );
  }
//}

export default UserInput;