import React from 'react'
// import PropTypes from 'prop-types'

const Card = props => {
  return (
    <div>
       <h2>{props.name}</h2>
       <p>Age: {props.age}</p>
       <p>Course: {props.course}</p>
    </div>
  );
};

// Card.propTypes = {}

export default Card 