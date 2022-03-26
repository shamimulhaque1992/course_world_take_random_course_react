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
    const clickCourseHandler = (course) => {
        // console.log(course);
        const newCart = [...cart, course];
        // console.log(newCart);
        setCart(newCart);
        // console.log(cart);
    };
    const clickRandomHandler = (carts) => {
        // console.log(carts);

        const item = carts[Math.floor(Math.random() * carts.length)];
        const newCart = [item];
        // console.log(newCart);
        setCart(newCart);
    };
    const clickAgainHandler = (carts) => {
        // console.log(carts);
        setCart([]);
        // console.log(cart);
    };
    return (
        <div className="store-container">
            <div className="course-container">
                {courses.map((course) => (
                    <Course
                        key={course.id}
                        course={course}
                        clickCourseHandler={clickCourseHandler}
                    />
                ))}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    clickAgainHandler={clickAgainHandler}
                    clickRandomHandler={clickRandomHandler}
                />
            </div>
        </div>
    );
};

export default Store;
