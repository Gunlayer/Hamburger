import React  from 'react';
import './style/Card.css';
import AddToCart from './UI/buttons/AddToCart';


export default function Card({item, click}) {
        return (
        <div className="card" id={item.id}>
            <div className="card-image-box">
                <img
                    className="card-image"
                    src={item.image}
                    alt="img"
                />
            </div>
            <p className="burger-name">{item.name}</p>
            <div className="price-box">
                <span>Price: </span>
                <span className="burger-price">{item.price}$</span>
            </div>
            <div className="card-button-box">
                <AddToCart click={click} btnid={item.id}/>
                
            </div>
        </div>
    )
}
