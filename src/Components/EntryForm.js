import React from 'react';

export default function EntryForm({
    newItem,
    handleChange,
    handleSubmit
}) {
    return (
        <div class='column'>
            <form onSubmit={handleSubmit} autocomplete='off' >
                <label for='to-do-input' />
                <input
                    type='text'
                    complete='false'
                    placeholder='Type here'
                    name='entry'
                    value={newItem.entry || ''}
                    onChange={handleChange}
                />
                <button type='submit' name='submit-button' >
                    Add Item
                </button>
            </form>
        </div>
    );  
}   