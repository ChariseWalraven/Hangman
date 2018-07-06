import React from 'react'
import { Typography } from '@material-ui/core'
import './Footer.css'

const Footer = ({ ...props }) => {
  return (
    <footer>
      <Typography component='a' variant='subheading' href='https://charise.info'>Copyright Charise Walraven 2018</Typography>  
    </footer>
  )
}

export default Footer