import logo from './logo.svg';
import './App.css';

import Nav from './components/NavbarComp';
import Form from './pages/Form';
import ShowProducts from './pages/ShowProducts';
import SingleProduct from './pages/SingleProduct';
import 'bootstrap/dist/css/bootstrap.min.css'

import {useState, useEffect} from "react"
import { Route, Routes, Link, useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()
  const url = "http://santas-workshop-backend.herokuapp.com/products/"

  const [products, setProducts] = useState([])

  const nullProduct = {
    name: "",
    description: "",
    price: "",
    url: "",
    category: ""
  }

  const [targetProduct, setTargetProduct] = useState(nullProduct)

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json()
    setProducts(data)
  };

  const addProducts = async (newProduct) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    });
    getProducts()
  };

  const getTargetProducts = (product) => {
    setTargetProduct(product)
    navigate("/edit")
  }

  const updateProducts = async(product) => {
    await fetch(url + product.id, {
      method: "put",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    });
    getProducts();
  }

  const deleteProduct = async (product) => {
    await fetch(url + product.id, {
      method: "delete"
    })

    getProducts()
    navigate("/")
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="App">
      <Nav/>
      <h1>Welcome to Santa's Workshop!!</h1>
      <Link to="/new"><button>Add a Product</button></Link>
      <Routes>
        <Route path="/" element={<ShowProducts products={products}/>}/>
        <Route path="/products/:id" element={<SingleProduct products={products} edit={getTargetProducts} deleteProduct={deleteProduct}/>}/>
        <Route path="/new" element={<Form
          initialProduct={nullProduct}
          handleSubmit={addProducts}
          buttonLabel="Create Product"
          />}/>
        <Route path="/edit" element={<Form
          initialProduct={targetProduct}
          handleSubmit={updateProducts}
          buttonLabel="Update Product"
        />} />
      </Routes>
    </div>
  );
}

export default App;
