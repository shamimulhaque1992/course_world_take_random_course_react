import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className="question">
            <div className="">
                <h1>How React Works?</h1>
                <p>
                    React is a simple JavaScript library that is used to build user interfaces. It
                    is declarative, efficient, and flexible. It designs minimal interfaces for each
                    state in our application, and React will inteligenly update and render only the
                    right component when our data changes. The building block of react is component
                    and each component is responsible for rendering a subsection fo our project. A
                    component can be used as nasted with other components in case of complex
                    application. There can be internal state in a component. React supports
                    unidirectional data flow. That means if data can be only accessable from parent
                    component to child component.
                </p>
            </div>
            <div className="">
                <h1>Difference Between Props and State</h1>
                <p>
                    The main difference between props and state is state is declerated inside the
                    component on the other hand props is passed by the parent component to the child
                    component. <br />
                    <strong>Definatin of props:</strong> Props one kind of attribute which React
                    components receive as an arbitrary input to produce a React element. They
                    provide a data flow between the components. To pass the data from one component
                    to another as a parameter we declear the props into the component and then when
                    we want to receive the data we destructure the data in the component. <br />
                    <strong>Definatin of state:</strong> State is a set of JavaScript variables
                    which contains data that influence how the component looks at a certain point in
                    time. The second part is what makes the state different compared to props. State
                    is just a copy of the app in a time. Every user interaction with our app may
                    lead to changes in the underlying state and in the whole UI as a result. State
                    changes over the lifetime of a React component.
                </p>
            </div>
            <div className="">
                <h1>How useState Works?</h1>
                <p>
                    useState is a React hook that allows us to have state variables. It is only
                    allowed to functional components. We pass initial value of the component to the
                    function and the function returns the current state as veriabel and a function
                    that can update the value.
                </p>
            </div>
        </div>
    );
};

export default Question;
