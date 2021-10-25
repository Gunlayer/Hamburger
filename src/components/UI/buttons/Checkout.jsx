import React from 'react';
import './Checkout.css';
import { Link } from "react-router-dom";

export default function Checkout() {
    return (
        <Link to="/checkout" className="checkout">
            CHECK OUT
        </Link>
        
    )
}
