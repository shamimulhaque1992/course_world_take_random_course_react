import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Store.css';

const Store = () => {
    const [courses, setCourse] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then((response) => response.json())
            .then((data) => setCourse(data));
    }, []);
    const clickHandler = (course) => {
        // console.log(course);
        const newCart = [...cart, course];
        setCart(newCart);
        // console.log(cart);
    };
    return (
        <div className="store-container">
            <div className="course-container">
                {courses.map((course) => (
                    <Course key={course.id} course={course} clickHandler={clickHandler} />
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Store;
