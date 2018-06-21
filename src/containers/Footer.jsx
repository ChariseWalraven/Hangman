import React from 'react'
import { Typography, withStyles, Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types';
import './Footer.css'


const styles = theme => ({
  root: theme.mixins.gutters({
    display: 'flexGrow',
    padding: 16,
  }),
})

const Footer = ({ ...props }) => {
  const { classes, theme } = props
  return (
    <Paper elevation={4} className={classes.root} id='Footer'>
      <Grid container className={classes.root} spacing={theme.spacing.unit * 2}>
        <Grid item xs={12}>
          <Grid container alignItems={'flex-end'}
            spacing={theme.spacing.unit * 2} justify='center'>
            <Typography component='a' variant='subheading' href='#'>Copyright Charise Walraven 2018</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)