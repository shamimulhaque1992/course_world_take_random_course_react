import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Store.css';

const Store = () => {
    const [courses, setCourse] = useState([]);
    const [cart, setCart] = useState([]);
    // losding the data
    useEffect(() => {
        fetch('course.json')
            .then((response) => response.json())
            .then((data) => setCourse(data));
    }, []);
    // showing the cours
    const clickCourseHandler = (course) => {
        // console.log(course);
        const newCart = [...cart, course];
        // console.log(newCart);
        setCart(newCart);
        // console.log(cart);
    };
    // showing the random course
    const clickRandomHandler = (carts) => {
        if (carts.length > 0) {
            const item = carts[Math.floor(Math.random() * carts.length)];
            const newCart = [item];
            // console.log(newCart);
            setCart(newCart);
        }
        // console.log(carts);
    };
    // clering the added course
    const clickAgainHandler = (carts) => {
        // console.log(carts);
        setCart([]);
        // console.log(cart);
    };
    const clickDeleteHandler = (carts) => {
        // console.log(carts);
        // console.log(carts);
        // const newCart = carts.filter((cs) => cs.id);
        // const newCart = carts.filter((item) => item.id !== 1);
        // console.log(newCart);
        // setCart(newCart);
        // setCart([]);
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
                    clickDeleteHandler={clickDeleteHandler}
                />
            </div>
        </div>
    );
};

export default Store;
