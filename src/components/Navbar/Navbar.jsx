import React from 'react';
import { AppBar, Toolbar, IconButton, Badge,  Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
// MenuItem, Menu,
import logo from '../../assets/logo.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => { 
    const classes = useStyles();
  return (
    <>
        <AppBar position='fixed' className='' color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt="Commerce.js" height='25px' className={classes.image}/>
                    Commerse.js
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton arial-label='Show cart items' color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>

        </AppBar>
    </>
  ) 
}

export default Navbar;
