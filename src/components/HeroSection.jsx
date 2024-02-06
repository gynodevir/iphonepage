import React from 'react'
import "./HeroSection.css"
import {Box,Typography,Button} from "@mui/material"
export const HeroSection = () => {
  return (
    <Box className='herocontainer'>
      <Typography variant='h2' gutterBottom className='herotitle'>
        Welcome to our iphone store
      </Typography>
      <Typography 
      variant='h5' 
      gutterBottom
      >“Think Different like a Pro”</Typography>
       <Button variant='contained' style={{ backgroundColor: 'dark' }}>
        Explore More
      </Button>
    </Box>
  )
}
