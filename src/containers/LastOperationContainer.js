import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LastOperation from '../components/LastOperation';
import { getHistory } from './../selectors/history';

class LastOperationContainer extends Component {
  render() {
    return (
      <div>
        <LastOperation lastOperation={this.props.lastOperation} />
      </div>
    )
  }
}

LastOperationContainer.propTypes = {
  lastOperation: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  lastOperation: getHistory(state)
})

export default connect(mapStateToProps)(LastOperationContainer);