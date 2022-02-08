import React from 'react';
import {Card, CardMedia, CarContent, CardActions, Typography, IconBotton, CardContent, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'


export const Product = ({product}) => {
  return(
        <Card className={classes.root}>
            <CardMedia className='' image='' title={product.name}/>
            <CardContent>
              <div className={classes.CardContent}>
                <Typography variant='h5' gutterBottom>
                  {product.name}
                </Typography>
                <Typography>
                  {product.price}
                </Typography>
              </div>
              <Typography variant="h2" color="textSecondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
              <IconButton arial-lable="Add to Cart">
                <AddShoppingCart/>
              </IconButton>
            </CardActions>
        </Card>
  ) 
}

export default Product

