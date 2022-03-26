import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Course.css';

const Course = ({ course, clickCourseHandler }) => {
    const { img, name, organization, price, ratings, stock, category } = course;

    return (
        <div className="course">
            <img src={img} alt=""></img>
            <div className="course-info">
                <p className="course-name">{name}</p>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                <p>
                    <small>Organization: {organization}</small>
                </p>
                <p>
                    <small>Ratings: {ratings} stars</small>
                </p>
                <p>
                    <small>Stock: {stock} more available</small>
                </p>
            </div>
            <button className="btn-cart" onClick={() => clickCourseHandler(course)}>
                <p className="btn-text">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Course;
