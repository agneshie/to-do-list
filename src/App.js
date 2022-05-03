import {useState} from 'react';

import './App.css';

import Header from './components/Header/Header.component';
import InputArea from './components/InputArea/InputArea.component';
import ListItem from './components/ListItem/ListItem.component';

function App() {

  const [toDoItems, setToDoItems] = useState([]);

  const addItem = (inputText) => {
    if(inputText !== "") {
      setToDoItems( (prevToDoItems) => {
        return [...prevToDoItems, inputText];
      });
    }
    console.log(inputText);
    
  }

  const deleteItem = (id) => {
    setToDoItems((prevToDoItems) => {
      return prevToDoItems.filter((toDoItem, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div className="container">
      <Header />
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {
            toDoItems.map( (toDoItem, index) => {
              return(
                <ListItem
                  key={index} 
                  listItem={toDoItem}
                  onClick={() => {
                    deleteItem(index);
                  }}
                />
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
