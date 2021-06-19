import React from 'react';

export default function IncompleteList ({
    allPending,
    handleDelete,
    handleComp,
    handleEdit,
    handleConfirmEdit,
    handleEditChange
}) {
    return (
        <ul>
            {allPending.map(({ entry, id, editState }) => (
                <li
                    key={id}
                >
                    <div>
                        <h2 id={id} >{ entry }</h2>
                        <button name={ entry } onClick={() => handleComp(id, entry)} >
                            &#10003;
                        </button>
                        <button onClick={() => handleDelete(allPending, id)} >
                            X
                        </button>
                        <button onClick={() => handleEdit(id)}>
                            Edit
                        </button>
                        {!editState ? null : (
                            <div id='editDiv' >
                                <input
                                    type='text'
                                    name='entryEdit'
                                    placeholder='Edit here'
                                    onChange={handleEditChange}
                                    autocomplete='off'
                                />
                                <button fakeId={id} onClick={handleConfirmEdit} >
                                    Confirm
                                </button>
                            </div>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}