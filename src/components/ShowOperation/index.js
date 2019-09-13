import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ShowOperation = ({ operation }) => {
  return (
    <div className="divText">
      <p>{operation}</p>
    </div>
  )
}

export default ShowOperation;