import React from "react";
import Grid from "@material-ui/core"

const products = [
    {id:1, name: 'shoes', description: 'Running shoes'}, 
    {id:1, name: 'socks', description: 'Nike white socks'},
    {id:1, name: 'top', description: 'Urban outfitter cross-top'},
    {id:1, name: 'bottom', description: 'skirts'}
]

const Products = () => {
    <main>
        <Grid container justify="center" sapcing={4}>
            {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={16} lg={3}>
                        <Product />
                    </Grid>
                ))}
        </Grid>
    </main>
}

export default Products;