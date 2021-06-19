import React from 'react';

export default function CompleteList ({ allComp, handleDelete }) {
    return (
        <ul>
            {allComp.map(({ name, id }) => (
                <li 
                    key={id}
                    style={{textDecorationLine: 'line-through'}}
                >
                    <div>
                        <h2>{ name }</h2>
                        <button onClick={() => handleDelete(allComp, id)} >
                            X
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}