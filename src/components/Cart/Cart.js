import React from 'react';
import './Cart.css';

const Cart = ({ cart, clickAgainHandler, clickRandomHandler }) => {
    // console.log(cart);
    /* const makeClear = () => {
        cart.clear();
    }; */

    return (
        <div className="cart">
            <div>
                <h3>selected course:</h3>
                {cart.map((course) => (
                    <div key={course.id}>
                        <p>{course.name}</p>
                    </div>
                ))}
            </div>
            <div className="cart-btn">
                <button onClick={() => clickRandomHandler(cart)}>Take a random course</button>
                <br />

                <button onClick={() => clickAgainHandler(cart)}>Select course Again</button>
            </div>
        </div>
    );
};

export default Cart;
