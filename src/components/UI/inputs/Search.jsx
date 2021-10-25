import React from 'react';
import './Search.css';



export default function Search({ items, filteredItems, setFilteredItems, setUserInput }) {

    const filterProducts = (event) => {        
        setUserInput(event.target.value);
        const regExp = new RegExp(event.target.value, 'i');
        filteredItems = items.filter(elem => regExp.test(elem.name));
        setFilteredItems(filteredItems);
    }   

    return (
        <div>
            <input className="search" type="text" placeholder="Search..." onChange={filterProducts} />
        </div>
    )
}
