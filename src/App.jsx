import { Logo, Form, ToDoLists, Stat } from './components';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  // review why consolog still console
  const handleAddItem = (new_item) => {
    setItems((items) => [...items, new_item]);
    // console.log(items);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id != id));
  };

  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <ToDoLists
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggle}
      />
      <Stat items={items} />
    </div>
  );
}
