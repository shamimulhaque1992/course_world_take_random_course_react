import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Course.css';

const Course = ({ course, clickHandler }) => {
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
            <button className="btn-cart" onClick={() => clickHandler(course)}>
                <p className="btn-text">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Course;
