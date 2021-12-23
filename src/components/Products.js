import React from "react";
import { Link } from "react-router-dom";

const Products = ({product}) => {
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%"
    }
    console.log(product)

    return <div style={div} className="product">
        <Link to={`/products/${product.id}`}>
            <img src={product.url} alt={product.name}/>
            <h4>{product.name}</h4> | <p>${product.price}</p>
            <p>Catgory: {product.category}</p> 
        </Link>
    </div>
}

export default Products