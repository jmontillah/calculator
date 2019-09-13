import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Key from './../components/Key';
import { setOperation } from './../actions/setOperation';
import { setToBegin } from './../actions/setToBegin';
import { getToBegin } from './../selectors/toBegin';
import { getOperation } from './../selectors/operation';

class KeyContainer extends Component {
  constructor(props) {
    super(props);
  }

  setOperation = value => {
    const { operation, toBegin, setOperation, setToBegin } = this.props;
    value === '=' ? setToBegin(0) : setToBegin(1); // 1 para saber que se agrega y 0 para reemplazar
    alert(toBegin);
    toBegin === 0 ? setOperation(value) : setOperation(`${operation} ${value}`);
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

const mapStateToProps = state => ({
  toBegin: getToBegin(state),
  operation: getOperation(state),
})

export default connect(mapStateToProps, { setOperation, setToBegin })(KeyContainer);