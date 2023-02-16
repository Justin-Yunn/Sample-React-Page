import { useState } from 'react'
import './App.css'

const App = () => {
  const [text, setText] = useState([
    { input: 'Hello World', id: 1}
  ]) 
  const [newInput, setNewInput] = useState('')

  const handleInputChange = (event) =>{
    setNewInput(event.target.value)
  }

  const addText = (event) => {
    event.preventDefault()
    const textObj = {
      input: newInput,
      id: text.length + 1,
    }

    var arr = text.map(i => i.input.toLowerCase())

    if(arr.includes(newInput.toLowerCase()) === false){
      setText(text.concat(textObj))
      setNewInput('')
    }

    else{
      alert(newInput + " already exists")
      setNewInput('')
      return
    }
  }

  return (
    <div className="App">
      <h1>Sample Page</h1>
      <h2>Add New:</h2>
      <form onSubmit={addText}>
        <div>
          Input: <input value={newInput} onChange={handleInputChange}></input> <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Output: </h2>
      <div>
        {text.map(i => 
          <p key={i.id}>
            {i.id + ': ' + i.input}
          </p>)}
      </div>
    </div>
  )
}

export default App