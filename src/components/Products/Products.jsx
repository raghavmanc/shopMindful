import React from "react";
import {Grid} from '@material-ui/core'
import Product from "./Product/Product";
const products = [
    {id:1, name: 'shoes', desc:'running shoes', price: '$5'},
    {id:2, name: 'watch', desc:'running watch', price: '$5'},
    {id:3, name: 'Dell Laptop', desc:'DELL G7 Gaming', price: '$5'}
];

const Products = () => {

    return (
        <main>
        <Grid container justify = 'center' spacing = {4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>



    )

}

export default Products