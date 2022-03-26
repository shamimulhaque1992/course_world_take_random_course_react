import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({ cart, clickAgainHandler, clickRandomHandler, clickDeleteHandler }) => {
    // console.log(cart);
    /* const makeClear = () => {
        cart.clear();
    }; */

    return (
        <div className="cart">
            <div>
                <h3>Selected course:</h3>
                {cart.map((course) => (
                    <div className="cart-details" key={course.id}>
                        <img src={course.img} alt="dfg"></img>
                        <p>{course.name}</p>

                        <button className="delete-btn" onClick={() => clickDeleteHandler(cart)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart-btn">
                <button className="neu-btn" onClick={() => clickRandomHandler(cart)}>
                    Take a random course
                </button>
                <br />

                <button className="neu-btn" onClick={() => clickAgainHandler(cart)}>
                    Select course Again
                </button>
            </div>
        </div>
    );
};

export default Cart;
