import { useState } from "react";
import React from "react";

function TodoList() {

    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);
    
    const addItem = () => {
        if (item === "") {
            alert('Please, enter an activity')
        }
        else {
        setItems(prev => [...prev, item]);
        setItem("");
    }
    }

    const deleteItem = (index) => {
        const newItems = items.filter((item, id) => id!==index); 
        setItems(newItems);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    }

    //generate id
    //uswe id-index


    return (
        <div className="todolist-container">
            <div className="todolist-text">
                <h2>Guangzhou is the city full of stunning views, amazing sightseeing and fine restaurants.</h2>
                <h3>Here you can keep all the beautiful spots, the best hotels, restaurants not to miss in your journey around Guangzhou</h3>
            </div>
            
            <div className="input-container">
                <input 
                type="text" 
                placeholder="e.g. Go up the Canton Tower, Have a dinner at Gaga restaurant" 
                value={item}
                onChange={(e) => setItem(e.target.value)}
                onKeyDown={handleKeyDown} />
                <button className="addBtn" onClick={addItem}>+</button>
            </div>
            

                <ol>
                    {items.map((item, index) => {
                        return (
                            <li key={index}>{item} <button className="deleteBtn" onClick={() => deleteItem(index)}>X</button></li>
                        )
                    })}
                </ol>
        </div>
        
    )
}

export default TodoList;