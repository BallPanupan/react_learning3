import React, { useState } from 'react';
import './style.css';

function InputName(props) {
  const [name, setName] = useState('');

  return (
    <div className='inputName'>

      <div className='form-input'>
        <h1>Enter your name</h1>
        <input type="text" onChange={(event)=>{setName(event.target.value)}}/>
      </div>

      <div>
        <h1>
          { name != null ? name : null }
        </h1>
      </div>

    </div>
  );
}

export default InputName

