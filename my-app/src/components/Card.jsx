import React from 'react'
// import PropTypes from 'prop-types'
import "./Card.css";
const Card = props => {
  return (
    <div className="card">
    <div>
       <h2>{props.name}</h2>
       <p>Age: {props.age}</p>
       <p>Course: {props.course}</p>
    </div>
    </div>
  );
};

// Card.propTypes = {}

export default Card 