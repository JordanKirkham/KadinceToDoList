import React from 'react';

export default function Sort ({ handleSort }) {
    return (
        <div class='column' >
            <label >View:</label>
            <hr></hr>
            <button name='All' onClick={handleSort} >
                All
            </button>
            <button name='Incomplete' onClick={handleSort} >
                Incomplete
            </button>
            <button name='Complete' onClick={handleSort} >
                Complete
            </button>
        </div>
    );
}