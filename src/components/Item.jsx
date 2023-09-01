const Item = ({ item }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.done}
        //onChange={() => onToggleItem(item.id)}
      />
      <span style={item.done ? { textDecoration: 'line-through' } : {}}>
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
