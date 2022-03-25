import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // console.log(cart);

    return (
        <div className="cart">
            <div>
                selected course:
                {cart.map((course) => (
                    <div key={course.id}>
                        <p>{course.name}</p>
                    </div>
                ))}
            </div>
            <div className="cart-btn">
                <button>Take a random course</button>
                <button>Select course Again</button>
            </div>
        </div>
    );
};

export default Cart;
