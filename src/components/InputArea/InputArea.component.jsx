import {useState} from 'react';

import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';

function InputArea({onAdd}){
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return(
    <div>
      <FormInput 
        onChange={handleChange}
        type="text"
        value={inputText}
      />
      <Button
        onClick={() => {
          onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </Button>
    </div>
  );
}

export default InputArea;