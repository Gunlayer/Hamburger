import React from 'react'
import Card from './Card';
import './style/CardBox.css';


export default function CardBox({ carts, setCart, items, error, isLoaded }) {
    


    const clickHandler = (id) => {
        const [clickedGood] = items.filter(item => item.id === +id);
        const cartItem = carts.find(item => item.id === clickedGood.id);
        if (cartItem) {
            clickedGood.quantity++;            
            setCart([...carts]);            
        } else {
            clickedGood.quantity = 1;            
            setCart([...carts, clickedGood]);
        }
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div className="card-box container">
                {items.map(item => (<Card key={item.id} item={item} click={clickHandler} />))}
            </div>
        );
    }
}


