import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ data, handleEdit, handleDelete}) => {

  return (
    <>
      {data.map((item, index) => {
        const {id, title} = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="edit-btn" onClick={() => handleEdit(item)}>
                <FaEdit />
              </button>
              <button className="delete-btn" onClick={() => handleDelete(item)}>
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
