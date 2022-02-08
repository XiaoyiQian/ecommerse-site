import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyle from './styles'

const products = [
  { id: 1, name: "shoes", description: "Running shoes", price: 10, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_a…ience-run-10-womens-road-running-shoes-NPqDgV.png' },
  { id: 2, name: "socks", description: "Nike white socks", price: 10, image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_a…ience-run-10-womens-road-running-shoes-NPqDgV.png'},
  { id: 3, name: "top", description: "Urban outfitter cross-top", price: 10, image:'https://cdn.shopify.com/s/files/1/2185/2813/products/W6241R_01_b1_s1_a1_m18_750x.jpg?v=1640734406' },
  { id: 4, name: "bottom", description: "skirts", price: 10, image: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W6241R_01_b1_s1_a1_m18_750x.jpg?v=1640734406' },
];

const Products = () => {
  const classes = useStyle()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" sapcing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={16} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
