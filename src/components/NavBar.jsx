import React from 'react'
import {AppBar,Toolbar,Typography} from "@mui/material"
import "../components/NavBar.css"
export const NavBar = () => {
  return (
    <AppBar position='statix' >
      <Toolbar className='appbar'>
        <Typography variant='h6' className='name'>iphone Store</Typography>
      </Toolbar>
    </AppBar>
  )
}
