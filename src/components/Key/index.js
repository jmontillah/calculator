import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Key = ({ value, setOperation }) => {
  return (
    <div className="divKey" onClick={() => setOperation(value)}>
      <p className="keyText">
        {value}
      </p>
    </div>
  )
}

Key.propTypes = {
  value: PropTypes.string.isRequired,
  setOperation: PropTypes.func.isRequired,
}

export default Key;