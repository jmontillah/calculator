import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Key from './../components/Key';
import { setOperation } from './../actions/setOperation';
import { setToBegin } from './../actions/setToBegin';

class KeyContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  setToBegin = value => {
    this.props.setToBegin(value);
  }
  
  setOperation = value => {
    this.props.setToBegin(value);
    this.props.setOperation(value);
  }

  render() {
    return (
      <div>
        <Key 
          value={this.props.value}
          setOperation={this.setOperation}
        />
      </div>
    )
  }
}

KeyContainer.propTypes = {
  setOperation: PropTypes.func.isRequired,
  setToBegin: PropTypes.func.isRequired,
}

export default connect(null, { setOperation, setToBegin })(KeyContainer);