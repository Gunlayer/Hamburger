import React, { useState } from 'react';
import './style/Header.css';
import CartItem from './CartItem';
import Checkout from './UI/buttons/Checkout';
import Search from './UI/inputs/Search';

const Header = ({ cart, setCart, items, filteredItems, setFilteredItems, setUserInput}) => {
    const [cartShow, setcartShow] = useState(false);
    
      
    const cartClickHandler = () => {
        setcartShow(!cartShow);
    }
    const getCounterResult = (cart) => {
        if (cart.length === 0) {
            return console.log("No items in cart");
        } else {            
            return cart.reduce(((acc, value) => acc + value.quantity), 0);
        }
    }
    const removeClickHandler = (id) => {
            const [selectedGood] = cart.filter(item => item.id === id);
            const index = cart.indexOf(selectedGood);           
            if (selectedGood.quantity > 0) {
               cart[index].quantity--;
               setCart([...cart]); 
            }
            if (selectedGood.quantity === 0) {                
                cart.splice(index,1);                 
                setCart([...cart]);                
            }
    }
    const countTotalPrice = (cart) => {
        const result = cart.reduce(((acc, item) => acc+item.price*item.quantity),0)
        return Math.round(result*100)/100;
    }    

    return (
        <div>
            <header>
                <div className="header-box container">
                    <div className="logo"><img src={'./images/logo.svg'} alt="logo" /></div>
                    <Search items={items} filteredItems={filteredItems} setFilteredItems={setFilteredItems} setUserInput={setUserInput}/>
                    <button className="cart-btn disable" onClick={cartClickHandler}>
                        <i className="fas fa-shopping-cart" ></i>
                    </button>
                    <div className={cartShow && getCounterResult(cart)>0 ? "cart-box show" : "cart-box"}>
                        {cart.map(elem => <CartItem  key={elem.id} cart={elem} removeClickHandler={removeClickHandler}/>)}
                        <p className="total">Total: ${countTotalPrice(cart)}</p>
                        <Checkout/>
                    </div>
                    <div className={getCounterResult(cart)>0 ? "counter show" : "counter"}>
                        <div className="counter-box">
                            {getCounterResult(cart)}
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header;
