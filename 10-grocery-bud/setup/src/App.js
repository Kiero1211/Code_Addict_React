import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // Error alert
    } else if (name && isEdit) {
      let found = false;
      let foundIndex = -1;
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === editID) {
          found = true;
          foundIndex = i;
        }
      }

      if (!found) {
        // Alert cannot find
      }
      // Edit list state
      setList(prev => {
        prev[foundIndex].title = name;
        return prev;
      })
      setName("");
      setIsEdit(false); 
    } else {
      const newJob = {
        id: new Date().getTime().toString(),
        title: name
      }
      setList(prev => [...prev, newJob]);
      setName("");
    }

  }

  const handleEdit = (item) => {
    setEditID(item.id);
    setIsEdit(true);
    setName(item.title);
  }

  const handleDelete = (requestedID) => {
    const newList = list.filter(item => item.id !== requestedID);
    setList(newList);
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input 
            type="text" 
            className="grocery"
            placeholder="e.g. Eggs"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit" className="submit-btn">
            {isEdit ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      { 
        (list.length > 0) &&
        <section className="grocery-container">
          <List 
            data={list}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <button className="clear-btn" onClick={() => setList([])}>Clear items</button>
        </section>
      }

    </section>
  )
}

export default App
