import React from 'react'
// import PropTypes from 'prop-types'
import "./Card.css";
const Card = props => {
  return (
    <div>
       <p>{props.name}</p>
       <p>Age: {props.age}</p>
       <p>Course: {props.course}</p>
    </div>
  );
};

// Card.propTypes = {}

export default Card 