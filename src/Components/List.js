import { useState } from 'react';
import Form from './Form';

export default function List ({listOfItems}) {

    return (
        <ul id='toDoList'>
            <li>
                {listOfItems[0]}
            </li>
            
        </ul>
    );
}