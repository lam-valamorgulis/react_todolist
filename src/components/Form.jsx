import { useState } from 'react'


const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState('')
    

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description) return  
    const new_item = { description,done:false,id:Date.now() }
    onAddItem(new_item)
    setDescription('')
  }
  
  
  return (
    <form className="add-form" onSubmit = {handleSubmit}>
      <h3>Add item: </h3>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange = {(e) => setDescription(e.target.value)}
      />
      <button>Add</button>      
    </form>
  )
}

export default Form