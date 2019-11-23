import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Key from './../components/Key';
import { setOperation } from './../actions/setOperation';
import { setToBegin } from './../actions/setToBegin';
import { setMathOperation } from './../actions/setMathOperation';
import { setHistory } from './../actions/setHistory';
import { getToBegin } from './../selectors/toBegin';
import { getOperation } from './../selectors/operation';
import { getMathOperation } from './../selectors/mathOperation';
import { evaluate } from 'mathjs';

class KeyContainer extends Component {
  constructor(props) {
    super(props);
  }

  setOperation = value => {
    const { operation, toBegin, mathOperation, setOperation, setToBegin, setMathOperation,
      setHistory } = this.props;
    toBegin === 0 ? setOperation(value) : 
      operation.slice(-1) === ',' ? setOperation(`${operation}${value}`) : 
        setOperation(`${operation} ${value}`);
    if (value === '=') {
      setHistory(operation);
      setMathOperation(String(evaluate(mathOperation)));
      setOperation(String(evaluate(mathOperation)).replace('.', ','));
    } else if (value === 'CE') {
      setToBegin(0);
      setMathOperation('0');
      setOperation('0');
    } else if (value === '←' ) {
      if (operation.length > 1) {
        setOperation(operation.slice(0, -2));
        setMathOperation(mathOperation.slice(0, -1));
      } else {
        setOperation(operation);
        setMathOperation(mathOperation);
      }
    } else if (value === ',') {
      setOperation(`${operation}${value}`);
      value = '.';
      setMathOperation(`${mathOperation}${value}`);
    } else {
      if (value === 'x') value = '*';
      if (value === '÷') value = '/';
      if (value === '√') value = 'sqrt(';
      setToBegin(1);
      value.indexOf('sqrt') != -1 ? 
        setMathOperation(`${value}`) :
        mathOperation.indexOf('sqrt') != -1 ?
          setMathOperation(`${mathOperation}${value})`) :
          setMathOperation(`${mathOperation}${value}`);
    }
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
  setMathOperation: PropTypes.func.isRequired,
  toBegin: PropTypes.number.isRequired,
  operation: PropTypes.string.isRequired,
  mathOperation: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  toBegin: getToBegin(state),
  operation: getOperation(state),
  mathOperation: getMathOperation(state)
});

const mapDispatchToProps = { setOperation, setToBegin, setMathOperation, setHistory };

export default connect(mapStateToProps, mapDispatchToProps)(KeyContainer);