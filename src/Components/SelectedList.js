import React from 'react';
import IncompleteList from './IncompleteList';
import CompleteList from './CompleteList';

export default function SelectedList ({
    chosenSort,
    allPending,
    handleDelete,
    handleComp,
    allComp,
    handleEdit,
    handleConfirmEdit,
    handleEditChange
}) {

    if (chosenSort === 'Complete') {
        return (        
            <div className='list' >  
                <CompleteList 
                    allComp={allComp}
                    handleDelete={handleDelete}
                />
            </div>  
        );

    } else if (chosenSort === 'Incomplete') {
        return (
            <div className='list' >
                <IncompleteList
                    allPending={allPending}
                    handleDelete={handleDelete}
                    handleComp={handleComp}
                    handleEdit={handleEdit}
                    handleConfirmEdit={handleConfirmEdit}
                    handleEditChange={handleEditChange}
                />
            </div>
        );

    } else if (chosenSort === 'All') {
        return (
            <div className='list' >
                <IncompleteList
                    allPending={allPending}
                    handleDelete={handleDelete}
                    handleComp={handleComp}
                    handleEdit={handleEdit}
                    handleConfirmEdit={handleConfirmEdit}
                    handleEditChange={handleEditChange}
                />
                <CompleteList 
                    allComp={allComp}
                    handleDelete={handleDelete}
                />
            </div>
        );

    } else {
        return <p>a</p>;
    }
}