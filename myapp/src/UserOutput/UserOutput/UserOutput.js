import React from 'react';
import './UserOutput.css';

const UserOutput =(props)=> {
 

  //render() {
    return (
      <div  name="a" className="UserOutput">
        <p>User Name :{props.userName}</p>
        <p>this is user output 2</p>
      </div>
    );
  //}
}

export default UserOutput;