import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
}


function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(() => getLocalStorage());
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
      showAlert(true, "danger", "Plese enter something")
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
        showAlert(true, "danger", "Cannot find item")
      }
      // Edit list state
      setList(prev => {
        prev[foundIndex].title = name;
        return prev;
      })
      setName("");
      setIsEdit(false);
      showAlert(true, "success", "Edited successfully");
    } else {
      showAlert(true, "success", `Successfully addedd ${name} to the list`)
      const newJob = {
        id: new Date().getTime().toString(),
        title: name
      }
      setList(prev => [...prev, newJob]);
      setName("");
    }

  }

  const showAlert = (
        show = false,
        type = "",
        msg = ""
      ) => {
        setAlert({show, type, msg});
      }

  const handleEdit = (requestedItem) => {
    setEditID(requestedItem.id);
    setIsEdit(true);
    setName(requestedItem.title);
  }

  const handleDelete = (requestedItem) => {
    const newList = list.filter(item => item.id !== requestedItem.id);
    setList(newList);
    showAlert(true, "danger", `Deleted ${requestedItem.title} from the list`)
  }

  const handleClearList = () => {
    showAlert(true, "danger", "Empty list")
    setList([]);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
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
          <button className="clear-btn" onClick={handleClearList}>Clear items</button>
        </section>
      }

    </section>
  )
}

export default App
