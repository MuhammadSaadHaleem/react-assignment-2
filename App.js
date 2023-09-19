import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [updateInput, setUpdateInput] = useState('');
  const [editInput, setEditInput] = useState(null);

  function addItems(){
    const tempList= [...list]
    tempList.push(updateInput)
    setList(tempList)
  }

  function updateInputValue(e) {
    setUpdateInput(e.target.value);
  }

  function deleteValue(index) {
    const tempList = [...list];
    tempList.splice(index, 1);
    setList(tempList);
  }

  function editValue(index) {

  }

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={updateInputValue} placeholder="Enter Item"/>
        <button onClick={addItems}>{editInput !== null ? 'Update' : 'Add'}</button>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => editValue(index)}>Edit</button>
              <button onClick={() => deleteValue(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
