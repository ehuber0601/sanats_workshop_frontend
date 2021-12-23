import React from "react";
import {Link, useParams} from "react-router-dom"

const SingleProduct = ({products, edit, deleteProduct}) => {
    const params = useParams()
    const id = parseInt(params.id)

    const product = products.find((p) => p.id === id)
    console.log(product)
    return <div className="display">
    <img src={product?.url} alt={product?.name}/>
    <div className="descrpition">
    <h2>{product?.name}</h2>
    <p><i>{product?.price}</i></p>
    <p>{product?.category}</p>
    <p>{product?.description}</p>
    </div>
    <button onClick={() => edit(product)}>Edit</button>
    <button onClick={() => deleteProduct(product)}>Delete</button>
    <Link to="/">
        <button>Go Back</button>
    </Link>
</div>    
}



export default SingleProduct