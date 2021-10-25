import React from 'react';
import { Link } from 'react-router-dom';
import Pay from '../components/UI/buttons/Pay';
import '../components/style/CheckoutPage.css';

export default function Checkout() {
    return (
        <div className="small-container">
            <form className="checkoutform" action="">
                <input className="search mt w100" type="text" placeholder="Enter your name" />
                <input className="search mt w100" type="text" placeholder="Enter your adress" />
                <div className="checkout-btn-box">
                    <Pay />
                    <Link to="/" className="pay-button">Home</Link>
                </div>
            </form>

        </div>
    )
}
