import React, { useState } from 'react'

const AddTodo = (props) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const submit = (e) => {

    if (!title || !desc) {
      alert("Title or Description cannot be blank")
    } else {
      props.addTodo(title, desc)
    }

    setTitle("")
    setDesc("")
  }

  return (
    <div className="container my-4">
      <div className="card shadow-sm p-4">

        <h4 className="mb-3">➕ Add New Todo</h4>

        <form onSubmit={submit}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Todo title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="form-control mb-3"
            placeholder="Description..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button type="submit" className="btn btn-success w-100">
            Add Todo
          </button>

        </form>

      </div>
    </div>
  )
}

export default AddTodo
