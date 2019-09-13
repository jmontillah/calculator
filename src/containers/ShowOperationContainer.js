import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShowOperation from './../components/ShowOperation';
import { getOperation } from './../selectors/operation';

class ShowOperationContainer extends Component {
  render() {
    return (
      <div>
        <ShowOperation operation={this.props.operation}/>
      </div>
    )
  }
}

ShowOperationContainer.propTypes = {
  operation: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  operation: getOperation(state)
});

export default connect(mapStateToProps)(ShowOperationContainer);