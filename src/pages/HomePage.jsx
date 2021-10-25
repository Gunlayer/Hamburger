import React from 'react';
import Header from '../components/Header';
import CardBox from '../components/CardBox';


export default function HomePage({cart, setCart, items, filteredItems, setFilteredItems, setUserInput, error, isLoaded, setIsLoaded, userInput }) {
    

    return (
        <div className="App">
            <Header cart={cart} setCart={setCart} items={items} filteredItems={filteredItems} setFilteredItems={setFilteredItems} setUserInput={setUserInput} />
            <CardBox carts={cart} setCart={setCart} items={userInput ? filteredItems : items} error={error} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
        </div>
    )
}
