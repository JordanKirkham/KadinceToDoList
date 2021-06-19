// Imports
import EntryForm from './Components/EntryForm';
import Sort from './Components/Sort';
import SelectedList from './Components/SelectedList';
import React, { useState, useEffect } from 'react';

function App() {

        // ITEM CREATION

  // State Hook for newly created to-do items
  const [newItem, setNewItem] = useState({});

  // Function which handles changes in the Entry text input
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewItem((prev) => ({
      ...prev,
      id: Date.now(),
      [name]: value,
      editState: false
    }));
  };

  /* State Hook for creating arrays of incomplete to-do items
     Used the name allPending since allIncomplete was more difficult to read */
  const [allPending, setAllPending] = useState([]);

  // Function which handles the Submit button being clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem.entry) return;
    setAllPending((prev) => [ ...prev, newItem ]);
    setNewItem({});
  };



        // EDITING ITEMS

  // State Hook for finding and storing the index of the item
  // which needs to be edited
  const [editItem, setEditItem] = useState(-1);

  // Function which handles the Edit button being clicked
  const handleEdit = (currId) => {
    setEditItem(allPending.findIndex(obj => obj.id === currId));
  };

  // Effect Hook for changing the editState of the current item
  useEffect(() => {
    if (allPending[editItem] ) {
      allPending[editItem].editState = true;
      setNewItem({})
    }
  }, [editItem]);

  // State Hook for holding the value from the Edit text input
  const [editValue, setEditValue] = useState('Temp');

  // Function which handles changes in the Edit text input
  const handleEditChange = ({ target }) => {
    setEditValue(target.value);
  };

  // Function which handles the Confirm Edit button being clicked
  const handleConfirmEdit = ({ target }) => {
    allPending[editItem].entry = editValue;
    allPending[editItem].editState = false;
    setAllPending((prev) => [ ...prev ]);
    handleDelete(allPending, target.fakeId);
  };



        // ITEM COMPLETION

  // State Hook for recreating items from the Incomplete array
  // and deleting them from there
  const [compItem, setCompItem] = useState({});

  // Function which handles the Checkmark button being clicked
  const handleComp = (evId, entry) => {
    setCompItem((prev) => ({ ...prev, name: entry, id: Date.now() }));
    handleDelete(allPending, evId);
  };

  // State Hook for adding all Complete Items to an array
  const [allComp, setAllComp] = useState([]);

  // Effect Hook for setting All Complete Items into their array
  useEffect(() => {
    if (compItem.name) {
      setAllComp((prev) => [ compItem, ...prev ]);
    }
  }, [compItem]);



        // SORTING ITEMS

  // State Hook for keeping track of which Sort the user wants
  const [chosenSort, setChosenSort] = useState('All');

  // Function which handles any sorting button being clicked
  const handleSort = ({ target }) => {
    setChosenSort(target.name);
  };



        // DELETING ITEMS

  // Function which handles any delete button being clicked
  const handleDelete = (currArr, itemIdToRemove) => {
    let setCurr;

    if (currArr === allPending) {
      setCurr = setAllPending;
    } else if (currArr === allComp) {
      setCurr = setAllComp;
    }

    setCurr((prev) => prev.filter(
      (item) => item.id !== itemIdToRemove
    ));
  };



        // JSX

  // JSX from several .js files, compiled together
  return (
    <div className="App">
    <header className="App-header">
      <h1>
        To-Do List
      </h1>
    </header>
    <div>
      <EntryFormds
        newItem={newItem}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Sort
        handleSort={handleSort}
      />
    </div>
    <SelectedList
      chosenSort={chosenSort}
      allPending={allPending}
      handleDelete={handleDelete}
      handleComp={handleComp}
      allComp={allComp}
      handleEdit={handleEdit}
      handleConfirmEdit={handleConfirmEdit}
      handleEditChange={handleEditChange}
    />
    </div>
  );
}

export default App;
