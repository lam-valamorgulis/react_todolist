import { Logo, Form, ToDoLists, Stat } from './components';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (new_item) => {
    setItems((item) => [...items, new_item]);
    console.log(items);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <ToDoLists items={items} />
      <Stat />
    </div>
  );
}
