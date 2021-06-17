import { useState } from 'react';

export default function Form() {
    const [newItem, setNewItem] = useState('Enter your To-Do item here');
    const handleChange = ({ target }) => {
        setNewItem(target.value);
    }
    const [listOfItems, setListOfItems] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setListOfItems((prev) => [...prev, newItem]);
        setNewItem({});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for='to-do-input' />
            <input type='text' name='to-do-input' onChange={handleChange} />
            <button type='submit' name='submit-button' >Add Item</button>
        </form>
    );
}