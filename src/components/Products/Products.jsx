import React from "react";
import {Grid} from '@material-ui/core'
import Product from "./Product/Product";
import useStyles from './styles'


const products = [
    {id:1, name: 'shoes', desc:'running shoes', price: '$5',img: 'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id:2, name: 'watch', desc:'running watch', price: '$5',img: 'https://images.pexels.com/photos/4041181/pexels-photo-4041181.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {id:3, name: 'Dell Laptop', desc:'DELL G7 Gaming', price: '$5',img: 'https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=600'}
];

const Products = () => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
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