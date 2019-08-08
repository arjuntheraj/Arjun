import React from 'react';
import './Cockpit.css';

const Cockpit =(props)=> {
  const style={
    backgroundClor:'white',
    font:'inherit',
    border:'1px solid blue',
    padding:'8px',
    cursor:'pointer'
  };

  //render() {
    return (
      <div>
      <h1>Hi I am React App</h1>
      {/* <button style={style} onClick={this.switchNameHandler.bind(this,"Arya B Raj")}>Change Name /Start</button> */}
      <button style={style} onClick={props.click}>Toggle person</button>
      
      </div>
    );
  //}
}

export default Cockpit;