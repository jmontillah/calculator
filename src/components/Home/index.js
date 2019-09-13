import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Keyboard from './../Keyboard';
import ShowOperationContainer from './../../containers/ShowOperationContainer';
import LastOperation from '../LastOperation';

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <LastOperation />
            </Grid>
            <Grid item xs={12}>
              <ShowOperationContainer />
            </Grid>
            <Grid item xs={12}>
              <Keyboard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home;