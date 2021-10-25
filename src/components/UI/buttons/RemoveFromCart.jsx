import React from 'react';
import './RemoveFromCart.css'

export default function RemoveFromCart({removeClickHandler, id}) {
    return (
        <div>
           <i className="far fa-times-circle" onClick={() => removeClickHandler(id)}></i>
        </div>
    )
}
