import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import KeyContainer from './../../containers/KeyContainer';
import { KEYS } from './../../constants';

const Keyboard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {KEYS.map(val => (
          <Grid key={val} item xs={3}>
            <KeyContainer value={val} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

Keyboard.propTypes = {

}

export default Keyboard;