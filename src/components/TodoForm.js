import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function TodoForm(props) {
  const [input, setInput] = useState({
    id: null,
    text: ''
  });

  const handleChange = e => {
    const value = e.target.value;
    setInput({text: value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    input.id = uuidv4();
    props.onSubmit(input);
    setInput({text:''});
  }
  return (
    <div className="input-area">
      <div className="heading">What's the plan for Today?</div>
      <form onSubmit={handleSubmit}>
        <input 
        onChange={handleChange} 
        value={input.text}
        name="input" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
