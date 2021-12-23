import React from "react";
import Products from "../components/Products";

const ShowProducts = (props) => {
    return props.products.map((product) => {
        return <Products key={product.id} product={product}/>
    })
}

export default ShowProducts