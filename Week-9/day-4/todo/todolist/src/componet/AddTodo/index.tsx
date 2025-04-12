import { useState } from "react";
import "./Todo.css";
import { FaTrash, FaEdit } from "react-icons/fa"; // Importing icons

function TodoList() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [completed, setCompleted] = useState<boolean[]>([]); 

  const handleAddItem = () => {
    if (!inputValue.trim()) return; // Prevent empty entries

    if (items.includes(inputValue)) {
      setInputValue("Item already exists!");
      return;
    }

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = inputValue;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, inputValue]);
    }

    setInputValue(""); // Clear input after adding
  };

  const handleEditItem = (index: number) => {
    setInputValue(items[index]); // Set input value for editing
    setEditIndex(index);
  };

  const handleDeleteItem = (index: number) => {
    alert("Are you sure u want to remove it")
    setItems(items.filter((_, i) => i !== index));
  };
///Toggle strikethrough
const toggleComplete = (index: number) => {
  const updatedStatus = [...completed];
  updatedStatus[index] = !updatedStatus[index];
  setCompleted(updatedStatus);
};

  return (
    <>
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddItem}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={completed[index]? "completed":"" } onClick={()=>toggleComplete(index)}>
            {item}
            <div className="buttons">
              <button className="edit" onClick={(e) =>{e.stopPropagation(); handleEditItem(index)}  }>
              <FaEdit />
              </button> 
              <button className="delete" onClick={(e) => {e.stopPropagation(); handleDeleteItem(index)} }>
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
   
    </>
  );
}

export default TodoList;
