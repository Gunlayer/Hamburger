import React from 'react';
import './AddToCart.css'

export default function AddToCart(props) {
    return (
        <div className="add-to-cart-btn"  onClick={() => props.click(props.btnid)}>
            Add to cart
        </div>
    )
    }
