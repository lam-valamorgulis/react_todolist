import { useState } from 'react';
import { Item } from '../components';

const ToDoLists = ({ items }) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItem;
  if (sortBy == 'input') sortedItem = items;
  if (sortBy == 'name')
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'finished')
    sortedItems = items.slice().sort((a, b) => Number(a.done) - Number(b.done));

  console.log(sortedItem);

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item item={item} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">by input</option>
          <option value="name">by name</option>
          <option value="finished">by finished</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
};

export default ToDoLists;
