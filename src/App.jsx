import { useState, useEffect } from 'react'
import Todo from './Todo.jsx'
import {db} from './firebase'
import {collection, query, onSnapshot, doc, addDoc, updateDoc, deleteDoc} from 'firebase/firestore'

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // create/add
  const handleClickAdd = async (e) => {
    e.preventDefault()
    if (input.trim() == "") {
      alert("input value")
      return
    } else {
      await addDoc(collection(db, 'todos'), {
        text: input,
        completed: false
      })
    }

    setInput('')
  }

  // read
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      })
      setTodos(todosArr)
    })
    return () => unsubscribe()
  })

  // update
  const handleClickCheckbox = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  // delete
  const handleClickDelete = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
    // alert(id)
  }

  return (
    <>
      <h1>Todo App with React/Firebase</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="add todo"></input>
        <button onClick={handleClickAdd}>add</button>
      </form>
      <Todo todos={todos} handleClickCheckbox={handleClickCheckbox} handleClickDelete={handleClickDelete}/>
    </>
  )
}

export default App
