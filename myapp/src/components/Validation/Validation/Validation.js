import React  from 'react';
import './Validation.css';

const Validation=(props)=> {
  let ValidationMessage;
  if(props.InputLength ===0){
    ValidationMessage = "Start typing...";
  }
  else
  if(props.InputLength <3){

    ValidationMessage = "Text is too short !!!";
  }
  else if(props.InputLength ===3){
    ValidationMessage = "Text is enough!!!";
  }
  else{
    ValidationMessage = "Text is too long !!!";
  }
    return (
      <div>{
      
        <p>{ValidationMessage}</p>
      

      }
        
      </div>
    );
  //}
}

export default Validation;