// Contactus.js

import React from 'react';
import "./Contactus.css";
import { Box, Typography, Button, TextField } from "@mui/material";

export const Contactus = () => {
  return (
    <Box component="form"
      noValidate
      autoComplete='off'
      className='formContainer'
    >
      <Typography variant='h6' gutterBottom>Feel Free to Contact Us</Typography>
      <TextField required id='name' label="Enter Your Name" variant='outlined' className='form-field' />
      <TextField required id='email' label="Enter Your Email" type="email" variant='outlined' className='form-field' />
      <TextField required id='message' label="Enter Your Message" multiline rows={4} variant='outlined' className='form-field' />
      <Button variant='contained' color='primary' className='sendButton'>Send Message</Button>
    </Box>
  );
};
