import React from 'react';
import './style/CartItem.css';
import RemoveFromCart from './UI/buttons/RemoveFromCart';

export default function CartItem({ cart, removeClickHandler }) {
    return (

        <div className="cart-item">
            <div className="cart-content">
                <div className="cart-img-box">
                    <img src={cart.image} alt="burger" />
                </div>
                <div className="cart-item-price-box">
                    <p className="cart-item-name">{cart.name}</p>
                    <p className="cart-item-price">{cart.price}$</p>
                </div>
                <p className="cart-item-quantity">{cart.quantity}</p>
                <RemoveFromCart id={cart.id} removeClickHandler={removeClickHandler} />
            </div>
            <div className="line"></div>
        </div>

    )
}
