import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const LastOperation = ({ lastOperation }) => {
  return (
    <div className="divTextLastOperation">
      <p>{lastOperation}</p>
    </div>
  )
}

LastOperation.propTypes = {
  lastOperation: PropTypes.string.isRequired,
}

export default LastOperation;