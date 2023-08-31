const ToDoLists = () => {
  return (
    <div className="list">
      <ul>
        <li>item 1 sdsdsadasd</li>
        <li>item 1 dsssssssss</li>
        <li>item 1 sssssssss</li>
        <li>item 1 sssssssss</li>
      </ul>

      <div className="actions">
        <select>
          <option>Sort by order</option>
          <option>Sort by name</option>
          <option>Sort by finished status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  )
}

export default ToDoLists