import React from "react";
import Grid from "@material-ui/core"

const products = [
    {id:1, name: 'shoes', description: 'Running shoes', price:10}, 
    {id:2, name: 'socks', description: 'Nike white socks', price:10},
    {id:3, name: 'top', description: 'Urban outfitter cross-top', price:10},
    {id:4, name: 'bottom', description: 'skirts', price:10}
]

const Products = () => {
    <main>
        <Grid container justify="center" sapcing={4}>
            {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={16} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
        </Grid>
    </main>
}

export default Products;
